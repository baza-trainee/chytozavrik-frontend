'use client';

import React from 'react';
import { AdminHeader, BookItem, TableHeader } from '@/app/(admin)/components';
import styles from './Recommended.module.scss';

const Page = () => (
  <div className={styles.recommended}>
    <AdminHeader withSearch withButton={false} withClose={false} heading="Рекомендовані книжки" />
    <div>
      <TableHeader variant="books" colNames={['Назва книги', 'Стан', 'Дата  додавання']} />
    </div>
  </div>
);

export default Page;
