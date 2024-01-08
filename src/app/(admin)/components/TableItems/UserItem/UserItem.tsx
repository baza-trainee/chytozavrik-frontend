'use client';

import React, { Fragment, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import usersTextData from '@/app/(admin)/admin/UserList/usersTextData.json';
import { AdminCheckBox } from '@/app/(admin)/components';
import { Trash2 } from 'lucide-react';
import Pagination from 'components/Pagination/Pagination';
import { Spinner } from 'components/common';
import NoSearchResults from '@/app/(admin)/components/NoResults/NoSearchResults';
import NoResults from '@/app/(admin)/components/NoResults/NoResults';
import { UserType } from '@/types/User';
import { BASE_URL } from '@/constants/api';
import { UserAdminProps } from '@/types';
import { useAuthAxiosInstance } from '@/hooks';
import { useDeleteUsers } from '@/hooks/Users/useDeleteUsers';
import { useDeleteChosenUsers } from '@/hooks/Users/useDeleteChosenUsers';
import { useQueryUsers } from '@/hooks/Users/useQueryUsers';
import styles from './UserItem.module.scss';
import TableHeader from '../../TableHeader/TableHeader';
import UsersCounter from '../../UsersCounter/UsersCounter';
import Modal from '../../../../../components/common/ModalActions/Modal';

const UserItem = (
  { searchValue = '' }: { searchValue: string | null },
  { page }: UserAdminProps
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);
  const { deleteUser, setIsDeleted, isDeleted } = useDeleteUsers();
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectedOpen, setIsSelectedOpen] = useState(false);
  const { usersLoading } = useQueryUsers({
    page,
    currentPage,
    searchValue,
  });
  const { handleDeleteUsers, isChosenDeleted, setIsChosenDeleted } = useDeleteChosenUsers();
  const queryClient = useQueryClient();
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

  const axios = useAuthAxiosInstance();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/users`);
      return res.data.data;
    },
  });

  if (isLoading) return <Spinner className={styles.spinner} />;
  if (isError || !data || !data) return <p>{usersTextData[0]}</p>;

  const count = data?.count ? Math.ceil(data.count / 9) : 0;
  const usersData = data.results;

  const handleCheckboxChange = (checked: boolean, userId: number) => {
    if (checked) {
      setSelected(prev => [...prev, userId]);
    } else {
      setSelected(prev => prev.filter(id => id !== userId));
    }
  };

  const handleDeleteConfirmation = () => {
    setIsSelectedOpen(true);
  };

  const handleDeleteSelectedUsers = () => {
    if (selected.length > 0) {
      handleDeleteUsers(selected);
      setIsChosenDeleted(true);
      setSelected([]);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * 10;
  const endIdx = startIdx + 10;

  const filteredUsers = searchValue
    ? usersData.filter((user: UserType) =>
        user.email.toLowerCase().includes(searchValue.toLowerCase())
      )
    : usersData;

  if (usersData.length === 0) {
    return (
      <>
        <UsersCounter users={filteredUsers} />
        <section className={styles.usersWrapper}>
          <TableHeader
            variant="users"
            handleDelete={handleDeleteConfirmation}
            colNames={['Email', 'Профілі дітей', 'Дата  реєстрації']}
          />
          <div className={styles.noResults}>
            <NoResults text={usersTextData[1]} image={usersTextData[2]} />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <UsersCounter users={filteredUsers} />
      <section className={styles.usersWrapper}>
        <div className={styles.subWrap}>
          <TableHeader
            variant="users"
            handleDelete={handleDeleteConfirmation}
            colNames={['Email', 'Профілі дітей', 'Дата  реєстрації']}
          />
          {usersLoading && <Spinner className={styles.spinner} />}
          {filteredUsers && filteredUsers.length > 0 ? (
            filteredUsers.slice(startIdx, endIdx).map((user: UserType) => (
              <div key={user.id} className={styles.userItem}>
                <div className={styles.checkbox}>
                  <AdminCheckBox
                    id={user.id}
                    onChange={e => {
                      // onCheckboxChange && onCheckboxChange(e.target.checked, user.id);
                      // onCheckboxChange(e.target.checked, user.id);
                      handleCheckboxChange(e.target.checked, user.id);
                    }}
                  />
                </div>
                <div className={styles.userInfo}>
                  <p className={styles.email}>{user.email}</p>
                  <div className={styles.names}>
                    {user.childs
                      ? user.childs.map((child, index) => (
                          <Fragment key={index}>
                            {index > 0 && index % 3 === 0 && <div className={styles.namesRow} />}{' '}
                            <div>{child}</div>
                          </Fragment>
                        ))
                      : 'Дітей не додано'}
                  </div>

                  <div className={styles.date}>
                    {format(new Date(user.date_joined), 'dd.MM.yyyy')}
                  </div>
                </div>
                <div
                  className={styles.delete}
                  onClick={() => {
                    setSelectedUser(user);
                    setIsOpen(true);
                  }}
                >
                  <Trash2 />
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <NoSearchResults />
            </div>
          )}
        </div>
        {isOpen && (
          <Modal
            type="question"
            message={usersTextData[3]}
            title={`Видалити “${selectedUser?.email}”`}
            active={isOpen}
            setActive={() => setIsOpen(false)}
            successFnc={() => {
              if (selectedUser && selectedUser.id) {
                deleteUser(selectedUser.id);
              }
            }}
          />
        )}
        {isDeleted && (
          <Modal
            type="success"
            message={`Користувача “${selectedUser?.email}” було видалено`}
            title={usersTextData[4]}
            active={isDeleted}
            setActive={() => {
              setIsDeleted(false);
              queryClient.invalidateQueries({ queryKey: ['users'] });
            }}
          />
        )}
        {isSelectedOpen && (
          <Modal
            type="question"
            message={`Ви впевнені, що хочете видалити ${selected.length} користувачів?`}
            title={`Видалити ${selected.length} користувачів`}
            active={isSelectedOpen}
            setActive={() => setIsSelectedOpen(false)}
            successFnc={handleDeleteSelectedUsers}
          />
        )}
        {isChosenDeleted && (
          <Modal
            type="success"
            message={usersTextData[6]}
            title={usersTextData[4]}
            active={isChosenDeleted}
            setActive={() => {
              setIsChosenDeleted(false);
              queryClient.invalidateQueries({ queryKey: ['users'] });
            }}
          />
        )}
        {filteredUsers && filteredUsers.length > 0 ? (
          <div className={styles.paginationWrapper}>
            <Pagination
              size="small"
              count={count}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        ) : null}
      </section>
    </>
  );
};

export default UserItem;
