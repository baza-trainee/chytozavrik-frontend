'use client';
import Link from 'next/link';
import styles from './NavbarMobFooter.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Container from 'components/common/Container/Container';
import Typography from 'components/common/Typography/Typography';

import { Tent, Brain } from 'lucide-react';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import Chytozavr from '@/app/(wigwam)/components/header/Chytozavr/Chytozavr';

interface Props {
  childId: string;
}

const NavbarMobFooter: NextPage<Props> = ({ childId }) => {
  const currentRoute = usePathname();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <Typography component='p' variant='navbar'>
            <Link className={styles.link} href={`/wigwam/${childId}`}
                  style={currentRoute === `/wigwam/${childId}` ? { color: '#F2B441' } : undefined}>
              <Tent width={24} height={24} className={classNames(styles.logo)}
                    color={currentRoute === `/wigwam/${childId}` ? '#F2B441' : '#7791fa'} />
              Вігвам
            </Link>
          </Typography>
          <Typography component='p' variant='navbar'>
            <Link className={styles.link} href={`/wigwam/${childId}/quizzes`}
                  style={currentRoute === `/wigwam/${childId}/quizzes` ? { color: '#F2B441' } : undefined}>
              <Brain width={24} height={24} className={classNames(styles.logo)}
                     color={currentRoute === `/wigwam/${childId}/quizzes` ? '#F2B441' : '#7791fa'} />
              Вікторини
            </Link>
          </Typography>

          <Typography component='p' variant='navbar'>
            <Link className={styles.link} href={`/wigwam/${childId}/awards`}
                  style={currentRoute === `/wigwam/${childId}/awards` ? { color: '#F2B441' } : undefined}>
              <Chytozavr stroke={currentRoute === `/wigwam/${childId}/awards` ? '#F2B441' : '#7791FA'} />
              Читозаврики
            </Link>
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default NavbarMobFooter;