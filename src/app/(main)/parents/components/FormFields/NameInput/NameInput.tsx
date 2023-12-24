'use client';

import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from './NameInput.module.scss';

interface NameInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const NameInput = ({ register, errors }: NameInputProps) => (
  <div className={styles.container}>
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
    {errors.name && <span className={styles.name}>Поле обов&apos;язкове</span>}
  </div>
);

export default NameInput;
