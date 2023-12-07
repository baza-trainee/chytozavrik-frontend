import React from 'react';
import { AdminHeader } from '@/app/(admin)/components';
import styles from './Statistics.module.scss';

const Statistics = () => (
  <div className={styles.statistics}>
    <AdminHeader withSearch={false} withButton={false} withClose={false} heading="Статистика" />
    <div>Place here another parts</div>
  </div>
);
export default Statistics;
