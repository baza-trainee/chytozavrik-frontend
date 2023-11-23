'use client'

import React, { useEffect, useState } from 'react';
import { useMedia } from '@/hooks';
import NavbarMobFooter from '@/app/(wigwam)/components/NavbarMobFooter/NavbarMobFooter';
import { NextPage } from 'next';

interface Props {
  childId: string
}

const WigwamFooter: NextPage<Props> = ({childId}) => {
  const {deviceType} = useMedia()

  return (
    <>
      {deviceType === "mobile" && <NavbarMobFooter childId={childId}/>}
    </>
  );
};

export default WigwamFooter;