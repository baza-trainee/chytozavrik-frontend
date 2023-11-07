'use client';
import React from 'react';
import Parents from '@/components/Parents';
import Navbar from '@/components/Navbar/Navbar';
import NavbarMob from '@/components/NavbarMob/NavbarMob';
import NavbarMobFooter from '../../components/NavbarMobFooter/NavbarMobFooter'

import { useState, useEffect } from 'react';

export default function ParentsPage() {
  const [navBarVisible, setNavBarVisible] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [footerVisible, setFooterVisible] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 767) {
        setNavBarVisible(false)
        setHeaderVisible(true);
        setFooterVisible(true);
        
      } else {
        setNavBarVisible(true)
        setHeaderVisible(false);
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
    {navBarVisible && <Navbar />}
    
     
    
    {headerVisible && <NavbarMob /> }
    <Parents />
   {footerVisible && <NavbarMobFooter /> }
    
  </main>;
};


