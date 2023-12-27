'use client';

import React, { useEffect, useState } from 'react';
import { Spinner, Typography } from 'components/common';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDefaultValues } from '@/app/(admin)/admin/quizzes/hooks/useDefaultValues';
import { useQueryQuizById } from '@/hooks/Books/useQueryQuizById';
import { useQueryBooks } from '@/hooks/Books/useQueryBooks';
import { transformData } from '@/app/(admin)/admin/quizzes/utils/transformData';
import { FormButtons, QuestionsList, QuizBookInput, UploadImage } from '@/app/(admin)/components';
import { useDebouncedCallback } from 'use-debounce';
import { BookAdmin } from '@/types';
import { SingleValue } from 'react-select';
import styles from './QuizForm.module.scss';

const validationSchema = yup.object().shape({
  ...[...Array(5)].reduce((acc, _, index) => {
    acc[`question_${index}_isTrue`] = yup.string().required(`Введіть відповідь`);
    acc[`question_${index}`] = yup
      .string()
      .required(`Питання ${index + 1} є обов'язковим`)
      .test(
        'question-answers-check',
        `Оберіть правильний варіант відповіді для цього питання`,
        (value, { parent }) => Boolean(parent[`question_${index}_isTrue`])
      );

    for (let j = 0; j < 3; j++) {
      acc[`question_${index}_answer_${j}`] = yup.string().required(`Введіть відповідь`);
    }

    return acc;
  }, {}),
});

type FormDatas = yup.InferType<typeof validationSchema>;

const QuizzesForm = ({ id }: { id?: number }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedValue, setSelectedValue] = useState<SingleValue<string>>('');
  const [searchValue, setSearchValue] = useState<SingleValue<string>>('');
  const [initialImg, setInitialImg] = useState('');
  const { quizById, quizLoading, fetchError: fetchErrorQuiz } = useQueryQuizById(id);
  const {
    books,
    booksLoading,
    fetchError: fetchErrorBooks,
  } = useQueryBooks({
    currentPage: 1,
    page: 'books',
    searchValue,
    select: data =>
      data.results.map((book: BookAdmin) => ({
        value: book.id,
        label: book.title,
        author: book.author,
      })),
  });
  const defaultValues = useDefaultValues(quizById);

  const clearInput = () => {
    setSearchValue('');
    setSelectedValue('');
  };

  const handleSelectChange = (selectedOption: SingleValue<string>) => {
    setSelectedValue(selectedOption);
  };

  const handleInputChange = (value: SingleValue<string>) => {
    setSearchValue(value);
  };

  const debouncedHandleInputChange = useDebouncedCallback(handleInputChange, 500);

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (quizById) methods.reset(defaultValues);
  }, [quizById, defaultValues]);

  const submit = (data: FormDatas) => {
    const transformedData = transformData(data);
    const dataToUse = {
      questions: transformedData,
      book: '0',
    };
  };

  if (fetchErrorQuiz || fetchErrorBooks) {
    return (
      <div className={styles.error}>
        Упс...Щось пішло не так:{' '}
        {fetchErrorQuiz ? fetchErrorQuiz.message : fetchErrorBooks!.message}
      </div>
    );
  }

  if (quizLoading || booksLoading) {
    return <Spinner className={styles.spinner} />;
  }

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(submit)}>
        <QuizBookInput
          options={books || []}
          onChange={handleSelectChange}
          clearInput={clearInput}
          onInputChange={debouncedHandleInputChange}
          selected={selectedValue}
          inputValue={searchValue}
          label="Назва книги"
        />
        <div className={styles.questions}>
          <Typography component="h2" variant="h5">
            Запитання
          </Typography>
          <QuestionsList />
        </div>
        <UploadImage
          onFileChange={(file: File | null) => setSelectedFile(file)}
          file={selectedFile}
          initialImg={initialImg}
          setInitialImg={setInitialImg}
          page="quizzes"
        />
        <FormButtons />
      </form>
    </FormProvider>
  );
};

export default QuizzesForm;
