'use client';
import Link from 'next/link';
import styles from './Header.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

import Container from '../common/Container/Container';
import { Button, Typography } from '../common';

const Header = () => {
  return (
    <header>
      <Container className={classNames(styles.header)}>
        <Link href='/' className={classNames(styles.headerContainer)}>
          <Image
            src="/header-logo.svg"
            width={64}
            height={54}
            alt="Logo"
            className={classNames(styles.logo)}
          />
          <Image
            src="/chytozavryk.svg"
            width={105}
            height={14}
            alt="Logo"
            className={classNames(styles.logoText)}
          />
        </Link>
       

        <div className={classNames(styles.buttonContainer)}>


          <Typography className={classNames(styles.link)} component="h2" variant="h2">
          <Link  href="#">
            Про проєкт
            </Link>
            </Typography>
          <Button className={classNames(styles.button)} variant="outline">
            Вхід
          </Button>
        </div>


      </Container>
    </header>
  );
};

export default Header;
