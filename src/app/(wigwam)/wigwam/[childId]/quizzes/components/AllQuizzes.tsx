'use client'

import React, { useState } from 'react';
import Banner from '@/app/(wigwam)/wigwam/[childId]/quizzes/components/Banner/Banner';


const AllQuizzes = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div>
      {isOpen && <Banner setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default AllQuizzes;