'use client';

import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { User2 } from 'lucide-react';
import { Button } from '@/components/common';
import { Route } from '@/constants';
import styles from './Header.module.scss';

const HeaderButton = () => {
  const session = useSession();
  const path = usePathname();
  const isPartners = path.includes(Route.PARENTS);

  if (session.status === 'loading') return null;

  if (session.status === 'authenticated') {
    if (isPartners) {
      return (
        <Button
          className={styles.button}
          variant="outline"
          onClick={() => signOut({ callbackUrl: Route.HOME })}
        >
          Вихід
        </Button>
      );
    } else {
      return (
        <Button
          component="link"
          href={Route.PARENTS}
          className={styles.button}
          variant="outline"
          startIcon={<User2 className={styles.userLogo}/>}
        >
          Кабінет
        </Button>
      );
    }
  } else {
    return (
      <Button component="link" href={Route.SIGN_IN} className={styles.button} variant="outline">
        Вхід
      </Button>
    );
  }
};

export default HeaderButton;
