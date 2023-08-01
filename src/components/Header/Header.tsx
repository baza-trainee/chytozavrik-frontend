'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import classNames from 'classnames';
import { Route } from '@/constants';
import { Button, Container, Typography } from '../common';
import styles from './Header.module.scss';
import { signOut } from 'next-auth/react';

const Header = () => {
  const session = useSession();

  return (
    <header>
      <Container className={classNames(styles.header)}>
        <div className={classNames(styles.headerContainer)}>
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
        </div>

        <div className={classNames(styles.buttonContainer)}>
          <Typography className={classNames(styles.link)} component="h2" variant="h2">
            <Link href="#">Про проєкт</Link>
          </Typography>

          {session.status !== 'loading' &&
            (session.status === 'authenticated' ? (
              <Button
                className={classNames(styles.button)}
                variant="outline"
                onClick={() => signOut({ callbackUrl: Route.HOME })}
              >
                Вихід
              </Button>
            ) : (
              <Button
                component="link"
                href={Route.SIGN_IN}
                className={classNames(styles.button)}
                variant="outline"
              >
                Вхід
              </Button>
            ))}
        </div>
      </Container>
    </header>
  );
};

export default Header;
