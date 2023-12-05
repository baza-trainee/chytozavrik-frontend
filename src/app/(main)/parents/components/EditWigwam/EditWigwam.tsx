'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './EditWigwam.module.scss';
import { Typography, Button } from 'components/common';
import { useFetch } from '@/hooks';
import { useEffect } from 'react';
import AvatarFields from '@/app/(main)/parents/components/FormFields/AvaratsFields/AvatarFields';
import NameInput from '@/app/(main)/parents/components/FormFields/NameInput/NameInput';
import Buttons from '@/app/(main)/parents/components/FormFields/Buttons/Buttons';

type Props = {
  closeEditWigwam: () => void;
  id: number;
};

type FormData = {
  name: string;
  avatar: number;
};

const defaultValues: FormData = {
  name: '',
  avatar: 0,
};


export default function EditWigwam({id, closeEditWigwam}: Props) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ defaultValues });

  const { fetch } = useFetch();


  const onSubmit: SubmitHandler<FormData> = formData => {
    formData.avatar = Number(formData.avatar);
    closeEditWigwam();
    editKidProfile(formData, id);
   
  };

  const editKidProfile = async (formData: FormData, id: number) => {
    try {
      await fetch(`users/me/children/${id}/`, 'PATCH', {
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
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Typography className={styles.title} component="p" variant="h3">
          Редагувати вігвам
        </Typography>
        <div className={styles.formWrapper}>
          <div>
            <NameInput register={register} errors={errors} />
            <Buttons onClick={closeEditWigwam} secondBtnText='Зберегти'/>
          </div>
          <AvatarFields register={register} errors={errors} />
        </div>
      </form>
    </section>
  );
}
