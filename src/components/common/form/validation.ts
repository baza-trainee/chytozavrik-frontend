import * as yup from 'yup';

const emailRegex =
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passworsRegex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,30}$/;

export const validation = {
  email: yup.string().lowercase().matches(emailRegex, 'Не вірна email адреса.').required(),
  signUpPassword: yup.string().required('Пароль не може бути порожнім.'),
  password: yup
    .string()
    .min(6, ({ min }) => `Пароль має бути не менше ${min} символів.`)
    .max(30, ({ max }) => `Пароль має бути не більше ніж ${max} символів.`)
    .matches(passworsRegex, 'Пароль повинен містити хоча б 1 букву та 1 цифру.')
    .required('Пароль не може бути порожнім.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароль не співпадає.')
    .required('Будь ласка, підтвердіть пароль.'),
  rememberMe: yup.boolean().required(),
  acceptedRules: yup
    .boolean()
    .oneOf([true], 'Ви повинні прийняти правила користування сайтом.')
    .required(),
  donate: yup
    .number()
    .typeError('Сума донату повинна бути більша за 0.')
    .positive('Сума донату повинна бути більша за 0.')
    .required(),
  bookInput: yup
    .string()
    .min(2, 'Мінімальна кількість символів 2')
    .required('Будь ласка, заповніть поле'),
  recommended: yup.boolean().required(),
};
