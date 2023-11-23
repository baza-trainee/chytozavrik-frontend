'use client'

import React from 'react';
import Navbar from '@/app/(wigwam)/components/header/Navbar/Navbar';
import { useMedia } from '@/hooks';
import NavbarMob from '@/app/(wigwam)/components/header/NavbarMob/NavbarMob';
import { ChildType } from '@/types';
import { NextPage } from 'next';


interface WigwamHeaderProps {
  childId: string
}
const WigwamHeader: NextPage<WigwamHeaderProps> = ({childId} ) => {
  const {isMobile} = useMedia()
  return (
    <>
      {isMobile ?<NavbarMob/> : <Navbar childId={childId}/>}
    </>
  );
};

export default WigwamHeader;