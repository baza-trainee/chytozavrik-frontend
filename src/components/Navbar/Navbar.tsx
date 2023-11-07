'use client';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Container from '../common/Container/Container';
import Typography from '../common/Typography/Typography';

import { LogOut, Tent, Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.generalLogo}>
          <Image
            src="/header-logo.svg"
            width={40}
            height={40}
            alt="Logo"
            className={classNames(styles.mainLogo)}
            />
            </div>
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

                  <Typography  component="p" variant="navbar">
            <Link className={styles.link} href="#">

                          <LogOut width={32} height={32} className={classNames(styles.logo)} />
                          Вихід
                          </Link>
                  </Typography>
                    </div>
                  <div className={classNames(styles.user)}>

                  <p>Name</p>
                  
          <Image
            src="/images/avatars/children-avatar-4.svg"
            width={32}
            height={32}
            alt="Logo"
            className={classNames(styles.avatar)}
                      />
                      </div>
          
        
      </Container>
    </section>
  );
};

export default Navbar;


// import { useState, useEffect } from 'react';

// export default function ParentsPage() {
//   const [navBarVisible, setNavBarVisible] = useState(true);
//   const [headerVisible, setHeaderVisible] = useState(true);
//   const [footerVisible, setFooterVisible] = useState(true);

//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth <= 767) {
//         setNavBarVisible(false)
//         setHeaderVisible(true);
//         setFooterVisible(true);
        
//       } else {
//         setNavBarVisible(true)
//         setHeaderVisible(false);
//         setFooterVisible(false);
        
//       }
//     }

   
//     window.addEventListener('resize', handleResize);

   
//     handleResize();

    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//   return <main>
//     {navBarVisible && <Navbar />}
    
     
    
//     {headerVisible && <NavbarMob /> }
//     <Parents />
//    {footerVisible && <NavbarMobFooter /> }
    
//   </main>;
// };