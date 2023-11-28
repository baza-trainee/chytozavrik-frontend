'use client'

import React, { useState } from 'react';
import MonsterDetails from '@/app/(wigwam)/wigwam/[childId]/awards/components/MonsterDetails/MonsterDetails';
import { Monster, MonstersResponse } from '@/types/MonstersTypes';
import AllMonsters from '@/app/(wigwam)/wigwam/[childId]/awards/components/AllMonsters/AllMonsters';

const MonstersList = ({results}: {results: Monster[]}) => {
  const [showMonster, setShowMonster] = useState(false)
  const showDetailsHandler = () => {
    setShowMonster(!showMonster)
  }
  return (
    <>
      {!showMonster
      ? <AllMonsters/>
      :  <MonsterDetails results={results} setShowMonster={setShowMonster}/>}
    </>
  );
};

export default MonstersList;