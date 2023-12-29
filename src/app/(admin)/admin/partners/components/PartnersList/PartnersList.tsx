'use client';

import React, { useState, Fragment } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useDeleteChosenPartners } from '@/hooks/Partners/useDeleteChosenPartners';
import { NoResults, TableHeader, AdminHeader, PartnerItem } from '@/app/(admin)/components';
import { useQueryPartners } from '@/hooks/Partners/useQueryPartners';
import { Spinner } from '@/components/common';
import Pagination from '@/components/Pagination/Pagination';
import { Route } from '@/constants';
import styles from './PartnersList.module.scss';

function PartnersList() {
  const [partnersList, setPartnersList] = useState<any | null>(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);
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
        <AdminHeader
          withSearch
          withButton
          buttonText="Додати партнера"
          withClose={false}
          heading="Партнери"
          setSearchWord={setSearchValue}
          href={`${Route.PARTNERS_ADD}`}
        />
        {partnersLoading && <Spinner className={styles.spinner} />}
        {fetchError && (
          <div className={styles.error}>Упс... Щось пішло не так: {fetchError.message}</div>
        )}
        {partners && partners.count === 0 && (
          <div>
            <NoResults text={noResultsText.partners} image="/images/admin/books-no-results.svg" />
          </div>
        )}
        <div>
          {partners?.results?.map((partner: any) => {
            const partnerId = partner.id && partner.id;
            return (
              <Fragment key={partnerId}>
                <PartnerItem
                  partner={partner}
                  page={page}
                  onCheckboxChange={handleCheckboxChange}
                  isDeleting={deletingPartners?.includes(partnerId)}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
      {partners && !partnersLoading && partners.count > 8 && (
        <Pagination currentPage={page} onPageChange={page => setPage(page)} count={count} />
      )}
    </div>
  );
}

export default PartnersList;
