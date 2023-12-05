'use client';

import React, { useState } from 'react';
import Parents from 'src/app/(main)/parents/components/Parents';
import CreateWigwam from '@/components/CreateWigwam';

export default function ParentsPage() {
  const [isShown, setIsShown] = useState(false);

  const toggleCreateWigwam = () => {
    if (!isShown) setIsShown(true);
    else setIsShown(false);
  };

  return (
    <>
      <Parents handleClick={toggleCreateWigwam} />
      {isShown && <CreateWigwam closeCreateWigwam={toggleCreateWigwam} />}
    </>
  );
}
