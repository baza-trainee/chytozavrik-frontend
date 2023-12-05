import React from 'react';
import styles from './Statistics.module.scss';
import AdminHeader from '@/app/(admin)/components/Header/AdminHeader';

const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <AdminHeader
        withSearch={false}
        withButton={false}
        withClose={false}
        heading='Статистика'
      />
      <div>
        Place here another parts
      </div>
    </div>
  );
};

export default Statistics;