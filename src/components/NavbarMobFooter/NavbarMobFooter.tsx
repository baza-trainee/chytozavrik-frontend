'use client';
import Link from 'next/link';
import styles from './NavbarMobFooter.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Container from '../common/Container/Container';
import Typography from '../common/Typography/Typography';

import { Tent, Brain } from 'lucide-react';

const NavbarMobFooter = () => {
  return (
    <section className={styles.section}>
          <Container>
              <div className={styles.wrapper}>
        <Typography  component="p" variant="navbar">
            <Link className={styles.link} href="#">
              <Tent width={24} height={24} className={classNames(styles.logo)} />
              Вігвам
            </Link>
                  </Typography>
             <Typography  component="p" variant="navbar">
            <Link className={styles.link} href="#">
              <Brain width={24} height={24} className={classNames(styles.logo)} />
              Вікторини
            </Link>
                  </Typography>
                  
                   <Typography  component="p" variant="navbar">
            <Link className={styles.link} href="#">
              <Image src="/images/chytozavr.svg" width={24} height={24} alt="Logo" className={classNames(styles.logo)} />
              Читозаврики
            </Link>
                  </Typography>
              </div>
      </Container>
    </section>
  );
};

export default NavbarMobFooter;