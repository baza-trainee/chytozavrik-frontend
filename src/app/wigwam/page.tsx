'use client';
import { useEffect, useState } from 'react';
import WigwamBooks from '@/components/WigwamBooks/WigwamBooks';
import Container from '../../components/common/Container/Container';
import WigwamReadBooks from '@/components/WigwamReadBooks/WigwamReadBooks';
import styles from './wigwam.module.scss';
import WigwamQuiz from '@/components/WigwamQuiz/WigwamQuiz';
import WigwamChitozavrikList from '@/components/WigwamChitozavrikList/WigwamChitozavrikList';

export default function Wigwam() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);

    updateWindowWidth();

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const desktop = windowWidth >= 1440;
  const laptop = windowWidth <= 1440 && windowWidth >= 768;
  const mobile = windowWidth < 768;

  return (
    <main>
      <Container className={styles.layout}>
        <div className={styles.wraper}>
          <div>
            <WigwamReadBooks />
            {desktop && <WigwamChitozavrikList />}
          </div>
          <WigwamQuiz />
          {laptop && <WigwamChitozavrikList />}
        </div>
        <WigwamBooks />
        {mobile && <WigwamChitozavrikList />}
      </Container>
    </main>
  );
}
