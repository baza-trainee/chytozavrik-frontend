'use client';

import React, { useEffect, useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { validation } from 'components/common/form';
import { Button, Checkbox, Modal, Spinner } from 'components/common';
import { useRouter } from 'next/navigation';
import { useQueryBookById } from '@/hooks/Books/useQueryBookById';
import Input from 'components/common/form/Input/Input';
import UploadImage from '@/app/(admin)/components/UploadImageComponent/UploadImage';
import styles from './BooksFrom.module.scss';

const schema = yup.object({
  title: validation.bookInput,
  author: validation.bookInput,
  is_recommended: validation.recommended,
});

type FormDatas = yup.InferType<typeof schema>;

const BooksForm = ({ id }: { id?: number }) => {
  const { bookById, bookLoading, fetchError } = useQueryBookById(id);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    //
    setSelectedFile(file);
  };

  const defaultValues: FormDatas = {
    title: '',
    author: '',
    is_recommended: false,
  };

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { control, reset, handleSubmit, resetField, setValue } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { errors, isDirty, isValid } = useFormState({ control });
  const isDisabled = Object.keys(errors).length > 0 || !isValid;

  useEffect(() => {
    if (bookById) {
      reset({
        title: bookById.title,
        author: bookById.author,
        is_recommended: bookById.is_recommended,
      });
    }
  }, [bookById, reset]);

  const submit = (data: FormDatas) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('is_recommended', data.is_recommended.toString());
  };

  return bookLoading ? (
    <Spinner className={styles.spinner} />
  ) : (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div className={styles.inputs}>
        <div className={styles.textInputs}>
          <Input
            name="title"
            control={control}
            label="Назва книги"
            placeholder="Введіть назву книги"
            resetField={() => resetField('title')}
          />
          <Input
            name="author"
            control={control}
            label="Автор книги"
            placeholder="Введіть автора книги"
            resetField={() => resetField('author')}
          />
          <Checkbox name="is_recommended" control={control}>
            Рекомендовані книжки
          </Checkbox>
        </div>
        <div style={{ width: '30%' }} className={styles.image}>
          <UploadImage onFileChange={handleFileChange} file={selectedFile} />
        </div>
      </div>
      <div className={styles.actions}>
        <Button
          variant="outline"
          color="primary"
          size="small"
          onClick={() => setIsOpen(true)}
          disabled={isDisabled}
        >
          Скасувати
        </Button>
        <Button type="submit" variant="filled" color="secondary" size="small" disabled={isDisabled}>
          Додати
        </Button>
      </div>

      {isOpen && (
        <Modal
          type="question"
          message="Ви точно хочете скасувати зміни? Вони не будуть збережені"
          title="Скасувати зміни"
          active={isOpen}
          setActive={() => setIsOpen(false)}
          successFnc={() => router.back()}
        />
      )}
    </form>
  );
};

export default BooksForm;
