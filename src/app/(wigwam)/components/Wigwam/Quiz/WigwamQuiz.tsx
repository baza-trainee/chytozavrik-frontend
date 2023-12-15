'use client';

import React from 'react';
import { BookType } from '@/types/WigwamBooks';
import { LastquizType } from '@/types/WigwamQuiz';
import WelcomeWigwam from '@/app/(wigwam)/components/Wigwam/Quiz/components/WelcomeWigwam';
import NoLastQuiz from '@/app/(wigwam)/components/Wigwam/Quiz/components/NoLastQuiz';
import LastQuiz from '@/app/(wigwam)/components/Wigwam/Quiz/components/LastQuiz';

export interface WigwamQuizProps {
  booksItem: BookType;
  wigwamQuizItem?: LastquizType;
}

const WigwamQuiz: React.FC<WigwamQuizProps> = ({ booksItem, wigwamQuizItem }) => {
  const uniqueQuizzes = wigwamQuizItem?.unique_quizzes_passed;

  if (!uniqueQuizzes) {
    return <WelcomeWigwam />;
  }

  if (booksItem?.current_score === '5/5') {
    return <NoLastQuiz />;
  }

  return <LastQuiz wigwamQuizItem={wigwamQuizItem} booksItem={booksItem} />;
};

export default WigwamQuiz;
