import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Typography } from '@/components/common';
import { Checkbox, Input, PasswordInput, validation } from '@/components/common/form';
import AuthLink from '../AuthLink';
import { Route } from '@/constants';
import styles from '../Auth.module.scss';

const schema = yup.object({
  email: validation.email,
  password: validation.password,
  rememberMe: validation.rememberMe,
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

  const formSubmit = ({ rememberMe, ...data }: FormData) => {
    console.log(data);
  };

  return (
    <div className={styles.dialog}>
      <Typography className={styles.title} component="h2" variant="h2">
        Вхід
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit(formSubmit)} noValidate>
        <div className={styles['inputs-group']}>
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
        </div>

        {/* <AuthLink className={styles['forgot-password']} href={Route.FORGOT_PASSWORD}>
          Забули пароль?
        </AuthLink> */}

        <div className={styles['checkboxes-groups']}>
          <Checkbox name="rememberMe" control={control}>
            Запам&apos;ятати мене
          </Checkbox>
        </div>

        <div className={styles['signup-group']}>
          <Typography component="p" variant="body">
            Ви ще не зареєстровані?
          </Typography>
          <AuthLink href={Route.SIGN_UP}>Зареєструватися</AuthLink>
        </div>

        <Button className={styles['button-submit']} type="submit" color="secondary">
          Увійти
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
