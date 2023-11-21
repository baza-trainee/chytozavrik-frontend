'use client';
import WigwamBooks from '@/components/WigwamBooks/WigwamBooks';
import Container from '../../../components/common/Container/Container';
import WigwamReadBooks from '@/components/WigwamReadBooks/WigwamReadBooks';
import styles from './wigwam.module.scss';
import WigwamQuiz from '@/components/WigwamQuiz/WigwamQuiz';
import NavbarMobFooter from '../../../components/NavbarMobFooter/NavbarMobFooter'
import { useState, useEffect } from 'react';



export default function Wigwam() {



  const [footerVisible, setFooterVisible] = useState(true);
  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 767) {
       
        setFooterVisible(true);
        
      } else {
       
        setFooterVisible(false);
        
      }
    }

   
    window.addEventListener('resize', handleResize);

   
    handleResize();

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <main>
   
     
      <Container className={styles.layout}>
        <div className={styles.wraper}>
          <WigwamReadBooks />
          <WigwamQuiz />
        </div>
        <WigwamBooks />
        </Container>
      {footerVisible && <NavbarMobFooter />}
     
    </main>
  
}
