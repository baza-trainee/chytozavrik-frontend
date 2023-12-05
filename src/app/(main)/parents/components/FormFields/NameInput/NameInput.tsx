import React from 'react';
import styles from './NameInput.module.scss';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface NameInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const NameInput = ({ register, errors } : NameInputProps) => {
  return (
    <>
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
    </>
  );
};

export default NameInput;