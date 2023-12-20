'use client';

import React from 'react';
import { AdminHeader, PartnerItem, TableHeader } from '@/app/(admin)/components';
import styles from './Partners.module.scss';

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
      <PartnerItem />
    </div>
  </div>
);

export default Partners;
