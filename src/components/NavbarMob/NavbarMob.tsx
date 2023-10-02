'use client';
import Link from 'next/link';
import styles from './NavbarMob.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Container from '../common/Container/Container';
import Typography from '../common/Typography/Typography';

import { LogOut } from 'lucide-react';

const NavbarMob = () => {
  return (
    <section className={styles.section}>
          <Container>
              <div className={styles.wrapper}>
        <Image
          src="/header-logo.svg"
          width={29}
          height={24}
          alt="Logo"
          className={classNames(styles.log)}
              />
              <Image
          src="/images/avatars/children-avatar-4.svg"
          width={32}
          height={32}
          alt="Logo"
          className={classNames(styles.log)}
              />
              <LogOut
          
          width={32}
          height={32}
          
          className={classNames(styles.logo)}
              />
              </div>
      </Container>
    </section>
  );
};

export default NavbarMob;