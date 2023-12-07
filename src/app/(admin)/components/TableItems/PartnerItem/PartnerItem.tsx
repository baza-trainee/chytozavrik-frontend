import React from 'react';
import styles from './PartnerItem.module.scss'
import AdminCheckBox from '@/app/(admin)/components/UI/AdminCheckBox/AdminCheckBox';
import { PenLine, Trash2 } from 'lucide-react';

const PartnerItem = () => {
  return (
    <div className={styles.partner}>
      <AdminCheckBox/>
      <div className={styles.info}>
        <p className={styles.title}>Назва партнера</p>
        <p className={styles.date}>08.08.2023</p>
      </div>
      <div className={styles.actions}>
        <div><PenLine /></div>
        <div><Trash2 /></div>
      </div>
    </div>
  );
};

export default PartnerItem;