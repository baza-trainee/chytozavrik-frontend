'use client';
import Link from 'next/link';
import styles from './Header.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

import Container from '../common/Container/Container';
import { Button } from '../common';

const Header = () => {
  return (
    <Container className={classNames(styles.headerContainer, styles.header)}>
      <Image
        src="/path431.png"
        width={64}
        height={54}
        alt="Logo"
        className={classNames(styles.logo)}
      />
      <div className={classNames(styles.buttonContainer)}>
        <Link className={classNames(styles.link)} href="#">
          Про проєкт
        </Link>
        <Button className={classNames(styles.button)} variant="outline">
          Вхід
        </Button>
      </div>
    </Container>
  );
};

export default Header;
