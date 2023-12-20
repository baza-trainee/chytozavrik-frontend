import React, { Fragment } from 'react';
import ContactItem from '@/app/(admin)/components/TableItems/ContactItem/ContactItem';
import { ContactsFormProps } from '@/types/Contacts';

const Contacts = ({ contacts = [] }: ContactsFormProps) =>
  contacts.map(contact => (
    <Fragment key={contact.id}>
      <ContactItem
        id={contact.id}
        first_phone={contact.first_phone}
        second_phone={contact.second_phone}
        email={contact.email}
        updated_at={contact.updated_at}
      />
    </Fragment>
  ));

export default Contacts;

// const Contacts = ({ contacts = [] }: ContactsFormProps) => (
//   <Fragment>
//     <ContactItem />
//   </Fragment>
// );
// export default Contacts;
