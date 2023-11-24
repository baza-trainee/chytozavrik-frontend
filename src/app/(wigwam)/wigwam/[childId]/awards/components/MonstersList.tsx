'use client'

import React, { useState } from 'react';
import MonsterDetails from '@/app/(wigwam)/wigwam/[childId]/awards/components/MonsterDetails/MonsterDetails';
import { Monster, MonstersResponse } from '@/types/MonstersTypes';

const MonstersList = ({results}: {results: Monster[]}) => {
  const [showMonster, setShowMonster] = useState(true)
  const showDetailsHandler = () => {
    setShowMonster(!showMonster)
  }
  return (
    <>
      {!showMonster
      ?<button onClick={showDetailsHandler}>AllMonsters</button>
      :  <MonsterDetails results={results}/>}
    </>
  );
};

export default MonstersList;