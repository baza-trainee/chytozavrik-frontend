'use client';

import React, { useState, Fragment } from 'react';
import { useDeleteChosenPartners } from '@/hooks/Partners/useDeleteChosenPartners';
import { NoResults, TableHeader, AdminHeader, PartnerItem } from '@/app/(admin)/components';
import { useQueryPartners } from '@/hooks/Partners/useQueryPartners';
import { Spinner } from '@/components/common';
import NoSearchResults from '@/app/(admin)/components/NoResults/NoSearchResults';
import Pagination from '@/components/Pagination/Pagination';
import { Route } from '@/constants';
import { Partner } from '@/types/admin/PartnersType';
import styles from './Partners.module.scss';

const Partners = ({ searchValue = '' }: { searchValue: string | null }) => {
  const [selected, setSelected] = useState<number[]>([]);
  const { handleDeletePartners, deletingPartners } = useDeleteChosenPartners();
  const [page, setPage] = useState(1);
  const { partners, partnersLoading, fetchError } = useQueryPartners({
    currentPage: page,
    searchValue,
  });
  if (partnersLoading) {
    console.log('Loading partners...');
  } else if (partners) {
    console.log(partners.results);
  }
  const count = partners?.count ? Math.ceil(partners.count / 8) : 0;
  const noResultsText = {
    partners: 'У вас ще немає доданих партнерів',
  };
  const handleCheckboxChange = (checked: boolean, partnerId: number) => {
    if (checked) {
      setSelected(prev => [...prev, partnerId]);
    } else {
      setSelected(prev => prev.filter(id => id !== partnerId));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <TableHeader
          variant="partners"
          colNames={['Назва', 'Дата  додавання']}
          handleDelete={() => handleDeletePartners(selected)}
        />
        {partnersLoading && <Spinner className={styles.spinner} />}
        {fetchError && (
          <div className={styles.error}>Упс... Щось пішло не так: {fetchError.message}</div>
        )}
        {partners &&
          partners.count === 0 &&
          (searchValue ? (
            <NoSearchResults />
          ) : (
            <NoResults
              text="По вашому запиту нічого не знайдено. Спробуйте сформулювати запит інакше або скористайтеся іншими ключовими словами "
              image="/images/admin/briefcase.svg"
            />
          ))}
        <div>
          {partners?.results?.map((partner: Partner) => (
            <PartnerItem
              key={partner.id}
              partner={partner}
              page={page}
              onCheckboxChange={handleCheckboxChange}
              isDeleting={deletingPartners?.includes(partner.id)}
            />
          ))}
        </div>
      </div>
      {partners && !partnersLoading && partners.count > 8 && (
        <Pagination currentPage={page} onPageChange={page => setPage(page)} count={count} />
      )}
    </div>
  );
};

export default Partners;
