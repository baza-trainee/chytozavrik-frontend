import React from 'react';
import { AdminHeader, TableHeader } from '@/app/(admin)/components';
import DocumentsList from '@/app/(admin)/admin/documents/components/DocumentsList';
import { fetch } from '@/services/axios';
import { DocumentsResponse } from '@/types/Documents';
import { notFound } from 'next/navigation';
import styles from './Documents.module.scss';

const Documents = async () => {
  const documentsResponse = await fetch<DocumentsResponse>('/documents/');

  if (documentsResponse.status !== 'success') notFound();

  const documents = documentsResponse.data.data;

  return (
    <div className={styles.documents}>
      <AdminHeader withSearch={false} withButton={false} withClose={false} heading="Документи" />
      <div>
        <TableHeader
          variant="documents"
          colNames={['Назва документу', 'Дата  оновлення', 'Редагування']}
        />
        <DocumentsList documents={documents} />
      </div>
    </div>
  );
};

export default Documents;
