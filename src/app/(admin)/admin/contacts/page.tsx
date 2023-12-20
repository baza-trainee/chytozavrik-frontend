import React from 'react';
import { AdminHeader, TableHeader } from '@/app/(admin)/components';
import styles from './Contacts.module.scss';
import { getContactsService } from '@/services/api';
import { dehydrate, QueryClient, HydrationBoundary } from '@tanstack/react-query';
import Contacts from '@/app/(admin)/admin/contacts/components/Contacts';

const ContactsPage = async () => {
  const queryClient = new QueryClient();

  const contacts = await queryClient.fetchQuery({
    queryKey: ['contact-info'],
    queryFn: getContactsService,
  });
  console.log('aaa');
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles.contacts}>
        <AdminHeader withSearch={false} withButton={false} withClose={false} heading="Контакти" />
        <div>
          <TableHeader variant="contacts" colNames={['Перелік контактів', 'Дата  оновлення']} />
          <Contacts contacts={contacts.data.data} />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default ContactsPage;
