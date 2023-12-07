import React from 'react';
import styles from '../WigwamBooks.module.scss';
import wigwamTextData from '@/app/(wigwam)/components/Wigwam/wigwamTextData.json';

const NotFoundBook = () => {
  return (
    <div className={styles.notfound}>
      <img src={'/images/wigwam/not_found.svg'} alt="not found" />
      <p>{wigwamTextData[10]}</p>
    </div>
  );
};

export default NotFoundBook;
