import React from 'react';
import MonstersList from '@/app/(wigwam)/wigwam/[childId]/awards/components/MonstersList';
import { fetch } from '@/services/axios';
import { MonstersResults } from '@/types/MonstersTypes';
import { notFound } from 'next/navigation';


type Props = {
  params: {
    childId: string;
  };
};

const Awards = async ({ params: { childId } }: Props) => {
  const requestMonsters = fetch<MonstersResults>(`/users/me/children/${childId}/rewards/`)
  const [monsters] = await Promise.all([requestMonsters])

  if (monsters.status === 'fail') notFound();

  const monstersData = monsters.data

  return (
    <main>
      <MonstersList results={monstersData.results}/>
    </main>
  );
};

export default Awards;