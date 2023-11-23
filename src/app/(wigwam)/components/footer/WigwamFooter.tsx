'use client'

import React from 'react';
import { useMedia } from '@/hooks';
import NavbarMobFooter from '@/app/(wigwam)/components/NavbarMobFooter/NavbarMobFooter';
import { NextPage } from 'next';

interface Props {
  childId: string
}

const WigwamFooter: NextPage<Props> = ({childId}) => {
  const {isMobile} = useMedia()
  return (
    <>
      {isMobile && <NavbarMobFooter childId={childId}/>}
    </>
  );
};

export default WigwamFooter;