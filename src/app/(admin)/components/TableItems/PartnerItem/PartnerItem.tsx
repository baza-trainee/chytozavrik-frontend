import React from 'react';
import { PenLine, Trash2 } from 'lucide-react';
import { AdminCheckBox } from '@/app/(admin)/components';
import styles from './PartnerItem.module.scss';

const PartnerItem = () => (
  <div className={styles.partner}>
    <AdminCheckBox id={1} />
    <div className={styles.info}>
      <p className={styles.title}>Назва партнера</p>
      <p className={styles.date}>08.08.2023</p>
    </div>
    <div className={styles.actions}>
      <div>
        <PenLine />
      </div>
      <div>
        <Trash2 />
      </div>
    </div>
  </div>
);

export default PartnerItem;
