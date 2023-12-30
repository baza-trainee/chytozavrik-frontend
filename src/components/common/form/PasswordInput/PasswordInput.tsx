'use client';

import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import IconButton from '@/components/common/IconButton';
import Input, { InputProps } from '../Input/Input';

const PasswordInput = <T extends FieldValues>(props: InputProps<T>) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { isPass, isShowMessage, ...inputProps } = props;

  const clickIconHandler = () => {
    setIsShowPassword(prev => !prev);
  };

  return (
    <div>
      <Input
        type={isShowPassword ? 'text' : 'password'}
        {...inputProps}
        icon={
          <IconButton icon={isShowPassword ? <EyeOff /> : <Eye />} onClick={clickIconHandler} />
        }
        isPass={isPass}
      />
      {isShowMessage && (
        <span style={{ fontSize: '14px', paddingTop: '8px', display: 'block' }}>
          Пароль повинен містити мінімум 8 символів, латиницею, у якому є хоча б 1 велика літера, 1
          цифра та 1 спецсимвол.
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
