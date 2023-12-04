'use client';

import  { useState } from 'react';
import Parents from 'src/app/(main)/parents/components/Parents';
import CreateWigwam from '@/components/CreateWigwam';
import KidsList from './components/KidsList';

export default function ParentsPage() {

  const [wigwam, setWigwam] = useState(false);
  //const [edit, setEdit] = useState(false);

  const toggleCreateWigwam = () => {
    if (!wigwam) setWigwam(true);
    else setWigwam(false);
  };

  // const toggleEditWigwam = () => {
  //   if (!edit) setEdit(true);
  //   else setEdit(false);
  // };

  return (
    <main>
      <Parents handleClick={toggleCreateWigwam} />
      {wigwam && <CreateWigwam closeCreateWigwam={toggleCreateWigwam} />}
      <KidsList/>
      {/* {edit && <EditWigwam closeEditWigwam={toggleEditWigwam} />} */}
    </main>
  );
}