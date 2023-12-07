'use client';

import  { useState } from 'react';
import Parents from 'src/app/(main)/parents/components/Parents';
import CreateWigwam from '@/components/CreateWigwam';
import KidsList from './components/KidsList';
import './styles.scss'

const ParentsPage = () => {

  const [wigwam, setWigwam] = useState(false);

  const toggleCreateWigwam = () => {
    if (!wigwam) setWigwam(true);
    else setWigwam(false);
  };

  return (
    <main>
      <Parents handleClick={toggleCreateWigwam} />
      
        {wigwam && <CreateWigwam setWigwam={setWigwam} />}
        <KidsList/>
     
      <div className='empty'/>
    </main>
  );
}

export default ParentsPage;