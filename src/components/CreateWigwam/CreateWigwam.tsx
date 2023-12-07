'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Container, Typography, Button } from 'components/common';
import { useFetch } from '@/hooks';
import { Dispatch, SetStateAction, useEffect } from 'react';
import AvatarFields from '@/app/(main)/parents/components/FormFields/AvaratsFields/AvatarFields';
import NameInput from '@/app/(main)/parents/components/FormFields/NameInput/NameInput';
import Buttons from '@/app/(main)/parents/components/FormFields/Buttons/Buttons';
import styles from './CreateWigwam.module.scss';

type Props = {
  setWigwam: Dispatch<SetStateAction<boolean>>;
};

type FormData = {
  name: string;
  avatar: number;
};

const defaultValues: FormData = {
  name: '',
  avatar: 0,
};

const CreateWigwam = ({ setWigwam }: Props) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ defaultValues });

  const { fetch } = useFetch();

  const createKidProfile = async (formData: FormData) => {
    try {
      await fetch(
        'users/me/children/',
        {
          name: formData.name,
          avatar: formData.avatar,
        },
        'POST'
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit: SubmitHandler<FormData> = formData => {
    const modifiedFormData = {
      ...formData,
      avatar: Number(formData.avatar),
    };
    setWigwam(false);
    createKidProfile(modifiedFormData);
  };

  useEffect(() => {
    resetField('name');
  }, [resetField]);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Typography className={styles.title} component="p" variant="h3">
            Створити вігвам
          </Typography>
          <div className={styles.formWrapper}>
            <div>
              <NameInput register={register} errors={errors} />
              <Buttons onClick={() => setWigwam(false)} secondBtnText="Створити" />
            </div>
            <AvatarFields register={register} errors={errors} />
          </div>
        </form>
      </Container>
    </section>
  );
};

export default CreateWigwam;
