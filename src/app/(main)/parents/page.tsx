'use client';

import { useState } from 'react';
import Parents from 'src/app/(main)/parents/components/Parents';
import CreateWigwam from '@/components/CreateWigwam';
import KidsList from './components/KidsList';
import './styles.scss';

const ParentsPage = () => {
  const [wigwam, setWigwam] = useState(false);

  const toggleCreateWigwam = () => {
    if (!wigwam) setWigwam(true);
    else setWigwam(false);
  };

  return (
    <>
      <Parents handleClick={toggleCreateWigwam} />
      <section className="section">
        {wigwam && <CreateWigwam setWigwam={setWigwam} />}
        <KidsList />
      </section>
      <div className="empty" />
    </>
  );
};

export default ParentsPage;
