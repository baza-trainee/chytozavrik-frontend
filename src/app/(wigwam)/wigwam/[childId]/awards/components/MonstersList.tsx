'use client'

import React, { useState } from 'react';
import MonsterDetails from '@/app/(wigwam)/wigwam/[childId]/awards/components/MonsterDetails/MonsterDetails';

const MonstersList = () => {
  const [showMonster, setShowMonster] = useState(true)
  const showDetailsHandler = () => {
    setShowMonster(!showMonster)
  }
  return (
    <>
      {!showMonster
      ?<button onClick={showDetailsHandler}>AllMonsters</button>
      :  <MonsterDetails/>}
    </>
  );
};

export default MonstersList;