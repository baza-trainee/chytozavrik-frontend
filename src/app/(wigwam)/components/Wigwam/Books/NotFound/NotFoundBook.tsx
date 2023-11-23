import React from 'react';
import styles from '../WigwamBooks.module.scss'

const NotFoundBook = () => {
  return (
    <div className={styles.notfound}>
      <img src='/images/wigwam/not_found.svg' alt='no results' />
      <p>Упс.. Немає результатів пошуку</p>
    </div>
  );
};

export default NotFoundBook;