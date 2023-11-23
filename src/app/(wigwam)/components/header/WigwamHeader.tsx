'use client'

import React from 'react';
import Navbar from '@/app/(wigwam)/components/header/Navbar/Navbar';
import { useMedia } from '@/hooks';
import NavbarMob from '@/app/(wigwam)/components/header/NavbarMob/NavbarMob';


const WigwamHeader = () => {
  const {isMobile} = useMedia()

  return (
    <>
      {isMobile ?<NavbarMob/> : <Navbar/>}
    </>
  );
};

export default WigwamHeader;