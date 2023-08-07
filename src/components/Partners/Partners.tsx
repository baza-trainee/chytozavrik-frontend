'use client';
import Image from 'next/image';
import classNames from 'classnames';
import { Container } from '../common';
import partnerMON from 'public/images/partner-mon.svg';
import partnerNSPU from 'public/images/partner-nspu.png';
import styles from './Partners.module.scss';
import { useSession } from 'next-auth/react';

const Partners = () => {
  const session = useSession();

  return (
    <section
      className={classNames({
        [styles.section]: true,
        [styles['section--margin-top']]: session.status === 'authenticated',
      })}
    >
      <Container className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image src={partnerMON} alt="Міністерство освіти та науки України" />
          </li>
          <li className={classNames(styles.item, styles['item--nspu'])}>
            <Image src={partnerNSPU} alt="Національна спілка письменників України" />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Partners;
