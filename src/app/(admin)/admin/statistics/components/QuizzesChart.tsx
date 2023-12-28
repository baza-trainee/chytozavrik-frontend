// 'use client';

import Typography from '@/components/common/Typography/Typography';
import React from 'react';
import { ChartQuizzes } from '@/types';
import BarChartCommon from './BarChartCommon';
import styles from '../Statistics.module.scss';

const QuizzesChart = ({ quizzes }: { quizzes: ChartQuizzes[] }) => {
  console.log('🚀 ~ file: QuizzesChart.tsx:10 ~ quizzes:', quizzes);
  return (
    <>
      <Typography component="h5" variant="h5" className={styles.title}>
        Кількість проходження вікторин
      </Typography>
      <BarChartCommon data={quizzes} />
    </>
  );
};

export default QuizzesChart;
