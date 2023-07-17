import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Typography } from '@/components/common';
import { Checkbox, Input, PasswordInput, validation } from '@/components/common/form';
import styles from './SignIn.module.scss';

const regex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const schema = yup.object({
  email: validation.email,
  password: validation.password,
  rememberMe: validation.rememberMe,
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'Passwords must match.')
  //   .required('Please, confirm your password.'),
});

type FormData = yup.InferType<typeof schema>;

const defaultValues: FormData = {
  email: '',
  password: '',
  rememberMe: false,
};

const SignIn = () => {
  const { control, handleSubmit, resetField } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const resetFieldByName = (name: keyof FormData) => () =>
    resetField(name, { keepError: true, keepDirty: true, keepTouched: true });

  const formSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className={styles.dialog}>
      <Typography component="h2" variant="h2">
        Вхід
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit(formSubmit)} noValidate>
        <Input
          control={control}
          type="email"
          name="email"
          resetField={resetFieldByName('email')}
          label="E-mail"
          placeholder="Введіть свій e-mail"
          autoComplete="username"
        />
        <PasswordInput
          control={control}
          name="password"
          resetField={resetFieldByName('password')}
          label="Ввести пароль"
          placeholder="Введіть свій пароль"
          autoComplete="current-password"
        />

        <Link href="/?auth=forgot-password">Забули пароль?</Link>

        <Checkbox name="rememberMe" control={control}>
          Запам&apos;ятати мене
        </Checkbox>

        <Typography component="p" variant="body">
          Ви ще не зареєстровані?
        </Typography>
        <Link href="/?auth=signup">Зареєструватися</Link>

        <Button className={styles['button-submit']} type="submit" color="secondary">
          Увійти
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
