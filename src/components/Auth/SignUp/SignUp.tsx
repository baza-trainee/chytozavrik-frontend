import { useEffect } from 'react';
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
  confirmPassword: validation.confirmPassword,
  rememberMe: validation.rememberMe,
  acceptedRules: validation.acceptedRules,
});

type FormData = yup.InferType<typeof schema>;

const defaultValues: FormData = {
  email: '',
  password: '',
  confirmPassword: '',
  rememberMe: false,
  acceptedRules: false,
};

const SignUp = () => {
  const { control, handleSubmit, resetField, watch, getValues } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const resetFieldByName = (name: keyof FormData) => () =>
    resetField(name, { keepError: true, keepDirty: true, keepTouched: true });

  const formSubmit = ({ confirmPassword, rememberMe, ...data }: FormData) => {
    console.log(data);
  };

  useEffect(() => {
    watch('acceptedRules');
  }, [watch]);

  return (
    <div className={styles.dialog}>
      <Typography className={styles.title} component="h2" variant="h2">
        Реєстрація
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
            label="Створити пароль"
            placeholder="Введіть свій пароль"
            autoComplete="new-password"
          />
          <PasswordInput
            control={control}
            name="confirmPassword"
            resetField={resetFieldByName('confirmPassword')}
            label="Повторити пароль"
            placeholder="Повторіть свій пароль"
            autoComplete="new-password"
          />
        </div>

        <div className={styles['checkboxes-groups']}>
          <Checkbox name="rememberMe" control={control}>
            Запам&apos;ятати мене
          </Checkbox>

          <Checkbox name="acceptedRules" control={control}>
            Я згоден з{' '}
            <a
              className={styles.link}
              href="/pdf/site-rules.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Правилами користування сайтом
            </a>
          </Checkbox>
        </div>

        <div className={styles['signup-group']}>
          <Typography component="p" variant="body">
            Ви вже зареєстровані?
          </Typography>
          <AuthLink href={Route.SIGN_IN}>Увійти в обліковий запис</AuthLink>
        </div>

        <Button
          className={styles['button-submit']}
          type="submit"
          color="secondary"
          disabled={!getValues().acceptedRules}
        >
          Зареєструватися
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
