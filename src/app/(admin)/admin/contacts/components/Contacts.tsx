import React, { Fragment } from 'react';
import ContactItem from '@/app/(admin)/components/TableItems/ContactItem/ContactItem';
import { ContactsFormProps } from '@/types/Contacts';

const Contacts = ({ documents }: ContactsFormProps) =>
  documents.map(item => (
    <Fragment key={item.id}>
      <ContactItem id={item.id} name={item.name} file={item.file} updated_at={item.updated_at} />
    </Fragment>
  ));

export default Contacts;