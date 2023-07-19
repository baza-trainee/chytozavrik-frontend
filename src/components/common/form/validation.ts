import * as yup from 'yup';

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const validation = {
  email: yup.string().matches(emailRegex, 'Не вірна email адреса.').required(),
  password: yup
    .string()
    .min(3, ({ min }) => `Пароль має бути не менше ${min} символів.`)
    .max(15, ({ max }) => `Пароль має бути не більше ніж ${max} characters.`)
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Паролі не співпадають.')
    .required('Будь ласка, підтвердіть пароль.'),
  rememberMe: yup.boolean().required(),
  donate: yup
    .number()
    .typeError('Сума донату повинна бути більша за 0.')
    .positive('Сума донату повинна бути більша за 0.')
    .required(),
};
