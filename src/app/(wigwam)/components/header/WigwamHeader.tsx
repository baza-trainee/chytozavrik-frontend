'use client'

import React, { FC, useEffect, useState } from 'react';
import Navbar from '@/app/(wigwam)/components/header/Navbar/Navbar';
import { useMedia } from '@/hooks';
import NavbarMob from '@/app/(wigwam)/components/header/NavbarMob/NavbarMob';


interface WigwamHeaderProps {
  childId: string
}
const WigwamHeader: FC<WigwamHeaderProps> = ({childId} ) => {
  const {deviceType} = useMedia()

  return (
    <>
      {deviceType === "mobile" ? <NavbarMob/> : <Navbar childId={childId}/>}
    </>
  );
};

export default WigwamHeader;