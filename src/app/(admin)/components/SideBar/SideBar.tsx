import React from 'react';
import Image from 'next/image';
import NavBar from '@/app/(admin)/components/SideBar/Navigation/NavBar';
import styles from './SideBar.module.scss';

const SideBar = () => (
  <section className={styles.sidebar}>
    <div className={styles.logo}>
      <Image src="/images/logo/logo-footer.svg" alt="logo" width={72} height={60} />
    </div>
    <NavBar />
  </section>
);

export default SideBar;
