'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Typography } from '@/components/common';
import styles from './DonateDialog.module.scss';
import Input from '@/components/common/Input';

type Props = {
  onClose: () => void;
};

const schema = yup.object({
  donate: yup.number().positive().required(),
});

type FormData = yup.InferType<typeof schema>;

const defaultValues: FormData = {
  donate: 0,
};

const DonateDialog = ({ onClose }: Props) => {
  const { control, handleSubmit, resetField, setValue } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const resetFieldByName = (name: keyof FormData) => () =>
    resetField(name, { keepError: true, keepDirty: true, keepTouched: true });
  const setFieldValue = (name: keyof FormData, value: number) => () =>
    setValue(name, value, { shouldValidate: true, shouldDirty: true, shouldTouch: true });

  const submit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className={styles.dialog}>
      <Typography className={styles.title} component="h2" variant="h3">
        Допоможіть нам відкрити світ книг для дітей!
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <Input
          control={control}
          name="donate"
          resetField={resetFieldByName('donate')}
          label="Введіть або оберіть суму донату"
          placeholder="Введіть суму донату"
        />
        <div className={styles['buttons-container']}>
          <Button
            className={styles['button-template']}
            variant="outline"
            onClick={setFieldValue('donate', 50)}
          >
            50 грн
          </Button>
          <Button
            className={styles['button-template']}
            variant="outline"
            onClick={setFieldValue('donate', 100)}
          >
            100 грн
          </Button>
          <Button
            className={styles['button-template']}
            variant="outline"
            onClick={setFieldValue('donate', 200)}
          >
            200 грн
          </Button>
        </div>
        <Button type="submit" color="secondary" className={styles['button-submit']}>
          Підтримати зараз
        </Button>
      </form>
    </div>
  );
};

export default DonateDialog;
