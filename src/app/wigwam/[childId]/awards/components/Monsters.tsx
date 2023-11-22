'use client'

import React, { useState } from 'react';
import MonsterDetails from '@/app/wigwam/[childId]/awards/components/MonsterDetail/MonsterDetails';

const Monsters = () => {
  const [isShowMonster, setIsShowMonster] = useState(false)
  const monsterDetailHandler = () => {
    setIsShowMonster(!isShowMonster)
  }

  return (
    <div>
      {!isShowMonster
        ?  <button onClick={monsterDetailHandler}>All monsters component</button>
      :  <MonsterDetails/>}
    </div>
  );
};

export default Monsters;