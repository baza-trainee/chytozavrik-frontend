'use client';

import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Input, { InputProps } from '../Input';
import IconButton from '@/components/common/IconButton';

const PasswordInput = <T extends FieldValues>(props: InputProps<T>) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const clickIconHandler = () => {
    setIsShowPassword(prev => !prev);
  };

  return (
    <Input
      type={isShowPassword ? 'text' : 'password'}
      {...props}
      icon={
        <IconButton icon={isShowPassword ? <FiEyeOff /> : <FiEye />} onClick={clickIconHandler} />
      }
    />
  );
};

export default PasswordInput;
