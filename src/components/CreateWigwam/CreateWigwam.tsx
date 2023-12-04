'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './CreateWigwam.module.scss';
import { Container, Typography, Button } from 'components/common';
import Image from 'next/image';
import Avatar1 from '../../../public/images/kids-avatar1.svg';
import Avatar2 from '../../../public/images/kids-avatar2.svg';
import Avatar3 from '../../../public/images/kids-avatar3.svg';
import Avatar4 from '../../../public/images/kids-avatar4.svg';
import Avatar5 from '../../../public/images/kids-avatar5.svg';
import Avatar6 from '../../../public/images/kids-avatar6.svg';
import { useFetch } from '@/hooks';
import { useEffect } from 'react';
import { ChildType } from '@/types';

type Props = {
  closeCreateWigwam: () => void;
};

type FormData = {
  name: string;
  avatar: number;
};

const defaultValues: FormData = {
  name: '',
  avatar: 0,
};

export default function CreateWigwam({ closeCreateWigwam }: Props) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ defaultValues });

  const { fetch } = useFetch();
  

  const onSubmit: SubmitHandler<FormData> = formData => {
    formData.avatar = Number(formData.avatar);
    closeCreateWigwam();
    createKidProfile(formData);
  };

  const createKidProfile = async (formData: FormData) => {
    try {
      await fetch('users/me/children/', 'POST', {
        name: formData.name,
        avatar: formData.avatar,
      });
    } catch (err) {
      console.log(err);
    }
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
              <label htmlFor="name" className={styles.label}>
                Введіть ім&apos;я дитини
              </label>
              <input
                {...register('name', { required: true, maxLength: 100 })}
                type="text"
                name="name"
                placeholder="Ім'я"
                className={styles.input}
              />
              {errors.name && <span>Поле обов&apos;язкове</span>}
              <div className={styles.buttonsWrapper}>
                <Button variant="outline" className={styles.button} onClick={closeCreateWigwam}>
                  Скасувати
                </Button>
                <Button type="submit" color="secondary" className={styles.button}>
                  Створити
                </Button>
              </div>
            </div>
            <fieldset className={styles.fieldset}>
              <legend className={styles.text}>Оберіть аватар</legend>
              <div className={styles.radioWrapper}>
                <input
                  {...register('avatar', { required: true })}
                  type="radio"
                  id="1"
                  name="avatar"
                  className={styles.radio}
                  value=" 1"
                />
                <label htmlFor="1">
                  <Image src={Avatar1} alt="аватар дитини" className={styles.image} />
                </label>
                <input
                  {...register('avatar', { required: true })}
                  type="radio"
                  id="2"
                  name="avatar"
                  className={styles.radio}
                  value="2"
                />
                <label htmlFor="2">
                  <Image src={Avatar2} alt="аватар дитини" className={styles.image} />
                </label>
                <input
                  {...register('avatar', { required: true })}
                  type="radio"
                  id="3"
                  name="avatar"
                  className={styles.radio}
                  value="3"
                />
                <label htmlFor="3">
                  <Image src={Avatar3} alt="аватар дитини" className={styles.image} />
                </label>

                <input
                  {...register('avatar', { required: true })}
                  type="radio"
                  id="4"
                  name="avatar"
                  className={styles.radio}
                  value="4"
                />
                <label htmlFor="4">
                  <Image src={Avatar4} alt="аватар дитини" className={styles.image} />
                </label>

                <input
                  {...register('avatar', { required: true })}
                  type="radio"
                  id="5"
                  name="avatar"
                  className={styles.radio}
                  value="5"
                />
                <label htmlFor="5">
                  <Image src={Avatar5} alt="аватар дитини" className={styles.image} />
                </label>

                <input
                  {...register('avatar', { required: true })}
                  type="radio"
                  id="6"
                  name="avatar"
                  className={styles.radio}
                  value="6"
                />
                <label htmlFor="6">
                  <Image src={Avatar6} alt="аватар дитини" className={styles.image} />
                </label>
              </div>
            </fieldset>
            {errors.avatar && <span>Оберіть аватар</span>}
          </div>
        </form>
      </Container>
    </section>
  );
}
