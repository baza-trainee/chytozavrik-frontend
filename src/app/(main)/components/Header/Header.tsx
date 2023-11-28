'use client';

import Image from 'next/image';
import Link from 'next/link';
import HeaderButton from './HeaderButton';
import { Button, Container } from 'components/common';
import styles from './Header.module.scss';
import { useSession } from 'next-auth/react';
import * as process from 'process';
import { useMedia } from '@/hooks';


const Header = () => {
  const { data: session } = useSession();
  const {deviceType} = useMedia();

  const adminData = process.env.NEXT_PUBLIC_ADMIN_EMAIL

  return (
    <header>
      <Container className={styles.header}>
        <Link href='/' className={styles.headerContainer}>
          <Image src='/images/logo/header-logo.svg' width={64} height={54} alt='Logo' className={styles.logo} />
          <Image
            src='/images/logo/chytozavryk.svg'
            width={105}
            height={14}
            alt='Logo'
            className={styles.logoText}
          />
        </Link>

        <div className={styles.buttonContainer}>
          {deviceType === "desktop"
            && session?.user?.email === adminData
            && <Button
              className={styles.buttonAdmin}
              component={'link'}
              href={'admin'}
              variant={'filled'}
              color={'primary'}
            >Адміністрування</Button>}
          <HeaderButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
