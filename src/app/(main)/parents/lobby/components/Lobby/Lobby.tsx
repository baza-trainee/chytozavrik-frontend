'use client';

import { Container, Spinner } from 'components/common';
import NoWigwams from '@/app/(main)/parents/lobby/components/Lobby/NoWigwams';
import WigwamsList from '@/app/(main)/parents/lobby/components/Lobby/WigwamsList';
import { useFetchChildren } from '@/hooks/Lobby/useFetchChildrens';
import styles from './Lobby.module.scss';

const Lobby = () => {
  const { children, isLoading } = useFetchChildren();

  let content;

  if (isLoading) {
    content = (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
  } else if (!children) {
    content = <NoWigwams />;
  } else {
    content = <WigwamsList users={children} />;
  }

  return (
    <section className={styles.section}>
      <Container className={styles.container}>{content}</Container>
    </section>
  );
};

export default Lobby;
