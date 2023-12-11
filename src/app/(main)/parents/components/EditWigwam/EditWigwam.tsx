'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Typography } from 'components/common';
import AvatarFields from '@/app/(main)/parents/components/FormFields/AvaratsFields/AvatarFields';
import NameInput from '@/app/(main)/parents/components/FormFields/NameInput/NameInput';
import Buttons from '@/app/(main)/parents/components/FormFields/Buttons/Buttons';
import styles from './EditWigwam.module.scss';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';

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

const EditWigwam = ({ id, closeEditWigwam }: Props) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ defaultValues });

  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';
  
  const onSubmit: SubmitHandler<FormData> = formData => {
    const modifiedFormData = {
      ...formData,
      avatar: Number(formData.avatar),
    };
    closeEditWigwam();
    submitData(modifiedFormData);
  };

  const { mutate: submitData } = useMutation({
  
    mutationFn: async (formData: FormData) => {
      
      await axios.patch(`${baseUrl}/users/me/children/${id}/`, 
      formData, {
        headers: {
          Authorization: `Bearer ${session?.user.token.access}`,
        },
      });
    },
      onSuccess: () => {
        resetField('name')
        queryClient.invalidateQueries(["kids"]);
      },
    });    


  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Typography className={styles.title} component="p" variant="h3">
          Редагувати вігвам
        </Typography>
        <div className={styles.formWrapper}>
          <div>
            <NameInput register={register} errors={errors} />
            <Buttons onClick={closeEditWigwam} secondBtnText="Зберегти" />
          </div>
          <AvatarFields register={register} errors={errors} />
        </div>
      </form>
    </section>
  );
};

export default EditWigwam;
