'use client'

import React, { useState } from 'react';
import MonsterDetails from '@/app/(wigwam)/wigwam/[childId]/awards/components/MonsterDetails/MonsterDetails';
import { Monster, MonstersResponse } from '@/types/MonstersTypes';
import AllMonsters from '@/app/(wigwam)/wigwam/[childId]/awards/components/AllMonsters/AllMonsters';

const MonstersList = ({results}: {results: Monster[]}) => {
  const [showMonster, setShowMonster] = useState(false)
  const [selectedMonsterId, setSelectedMonsterId] = useState<number | string | null>(null);
  const showDetailsHandler = (id: number | string) => {
    setSelectedMonsterId(id);
    setShowMonster(true)
  };

  return (
    <>
      {!showMonster
        ? <AllMonsters results={results} onMonsterClick={showDetailsHandler} />
        :  <MonsterDetails monsterId={selectedMonsterId} results={results} setShowMonster={setShowMonster}  />}
    </>
  );
};

export default MonstersList;
