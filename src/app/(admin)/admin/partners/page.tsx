import React from 'react';
import { AdminHeader, TableHeader } from '@/app/(admin)/components';
import { Metadata } from 'next';
import PartnersList from './components/PartnersList/PartnersList';
import styles from './Partners.module.scss';

export const metadata: Metadata = {
  title: 'Партнери - Читозаврик',
};

const Partners = () => (
  <div className={styles.partners}>
    <AdminHeader
      withSearch
      withButton
      withClose={false}
      buttonText="Додати партнера"
      heading="Партнери"
    />
    <div>
      <TableHeader variant="partners" colNames={['Назва', 'Дата  додавання']} />
      <PartnersList />
    </div>
  </div>
);

export default Partners;
