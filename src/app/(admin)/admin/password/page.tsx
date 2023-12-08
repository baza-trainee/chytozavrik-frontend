import React from 'react';
import { AdminHeader } from '@/app/(admin)/components';
import styles from './Password.module.scss';

const ChangePassword = () => (
  <div className={styles.password}>
    <AdminHeader withSearch={false} withButton={false} withClose={false} heading="Змінити пароль" />
    <div>Place here another parts</div>
  </div>
);

export default ChangePassword;
