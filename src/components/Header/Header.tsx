import Image from 'next/image';
import Link from 'next/link';
import HeaderButton from './HeaderButton';
import { Container, Typography } from '../common';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <Container className={styles.header}>
        <Link href="/" className={styles.headerContainer}>
          <Image src="/header-logo.svg" width={64} height={54} alt="Logo" className={styles.logo} />
          <Image
            src="/chytozavryk.svg"
            width={105}
            height={14}
            alt="Logo"
            className={styles.logoText}
          />
        </Link>

        <div className={styles.buttonContainer}>
          <HeaderButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
