'use client';

import  { useState } from 'react';
import Parents from 'src/app/(main)/parents/components/Parents';
import CreateWigwam from '@/components/CreateWigwam';
import KidsList from './components/KidsList';
import './styles.scss'

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
      <section className="section">
        {wigwam && <CreateWigwam closeCreateWigwam={toggleCreateWigwam} />}
        <KidsList/>
      </section>
      <div className='empty'/>
      {/* {edit && <EditWigwam closeEditWigwam={toggleEditWigwam} />} */}
    </main>
  );
}