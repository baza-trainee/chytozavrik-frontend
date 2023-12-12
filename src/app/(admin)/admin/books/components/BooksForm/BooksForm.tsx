'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input, validation } from 'components/common/form';
import { Button } from 'components/common';
import Checkbox from 'components/common/form/Checkbox';
import styles from './BooksFrom.module.scss';

const schema = yup.object({
  title: validation.bookInput,
  author: validation.bookInput,
  is_recommended: validation.recommended,
});

type FormData = yup.InferType<typeof schema>;

const BooksForm = () => {
  const { control, handleSubmit, resetField, setValue } = useForm({
    defaultValues: {
      title: '',
      author: '',
      is_recommended: false,
    },
    resolver: yupResolver(schema),
  });

  const submit = (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div className={styles.inputs}>
        <div className={styles.textInputs}>
          <Input
            name="title"
            control={control}
            label="Назва книги"
            placeholder="Введіть назву книги"
          />
          <Input
            name="author"
            control={control}
            label="Автор книги"
            placeholder="Введіть автора книги"
          />
          <Checkbox name="is_recommended" control={control}>
            Рекомендовані книжки
          </Checkbox>
        </div>
        <div style={{ width: '302px' }} className={styles.image}>
          image input
        </div>
      </div>
      <div className={styles.actions}>
        <Button variant="outline" color="primary" size="small">
          Скасувати
        </Button>
        <Button variant="filled" color="secondary" size="small">
          Додати
        </Button>
      </div>
    </form>
  );
};

export default BooksForm;
