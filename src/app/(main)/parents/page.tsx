'use client';

import React, { useState } from 'react';
import Parents from 'src/app/(main)/parents/components/Parents';
import CreateWigwam from '@/components/CreateWigwam';
import KidSection from './components/KidSection';
import EditWigwam from './components/EditWigwam';

export default function ParentsPage() {
  const [wigwam, setWigwam] = useState(false);
  const [edit, setEdit] = useState(false);

  const toggleCreateWigwam = () => {
    if (!wigwam) setWigwam(true);
    else setWigwam(false);
  };

  const toggleEditWigwam = () => {
    if (!edit) setEdit(true);
    else setEdit(false);
  };

  return (
    <main>
      <Parents handleClick={toggleCreateWigwam} />
      {wigwam && <CreateWigwam closeCreateWigwam={toggleCreateWigwam} />}
      <KidSection onClick={toggleEditWigwam}/>
      {edit && <EditWigwam closeEditWigwam={toggleEditWigwam} />}
    </main>
  );
}