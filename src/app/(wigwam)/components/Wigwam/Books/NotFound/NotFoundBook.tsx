import React from 'react';
import Image from 'next/image';
import styles from '../WigwamBooks.module.scss';

const NotFoundBook = () => (
  <div className={styles.notfound}>
    <Image src="/images/wigwam/not_found.svg" alt="not found" width={212} height={128} />
    <p>Упс.. Немає результатів пошуку</p>
  </div>
);

export default NotFoundBook;
