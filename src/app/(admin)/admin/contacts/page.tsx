import React from 'react';
import { AdminHeader, TableHeader } from '@/app/(admin)/components';
import { Metadata } from 'next';
import styles from './Contacts.module.scss';

export const metadata: Metadata = {
  title: 'Контакти - Читозаврик',
};

const Contacts = () => (
  <div className={styles.contacts}>
    <AdminHeader withSearch={false} withButton={false} withClose={false} heading="Контакти" />
    <div>
      <TableHeader variant="contacts" colNames={['Перелік контактів', 'Дата  оновлення']} />
    </div>
  </div>
);

export default Contacts;
