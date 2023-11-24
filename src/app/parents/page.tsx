'use client';

import React, { useState } from 'react';
import Parents from '@/components/Parents';
import CreateWigwam from '@/components/CreateWigwam';

export default function ParentsPage() {
  const [isShown, setIsShown] = useState(false);

  const toggleCreateWigwam = () => {
    if (!isShown) setIsShown(true);
    else setIsShown(false);
  };

  return (
    <main>
      <Parents handleClick={toggleCreateWigwam} />
      {isShown && <CreateWigwam closeCreateWigwam={toggleCreateWigwam} />}
    </main>
  );
}
