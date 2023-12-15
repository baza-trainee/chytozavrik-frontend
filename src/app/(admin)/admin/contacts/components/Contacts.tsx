import React, { Fragment } from 'react';
import ContactItem from '@/app/(admin)/components/TableItems/ContactItem/ContactItem';
import { ContactsFormProps } from '@/types/Contacts';

const Contacts = ({ documents }: ContactsFormProps) =>
  
    <Fragment >
      <ContactItem />
    </Fragment>
  ;

export default Contacts;