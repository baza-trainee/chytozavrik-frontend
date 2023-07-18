'use client';

import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import Input, { InputProps } from '../Input';
import { Eye, EyeOff } from 'lucide-react';
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
      icon={<IconButton icon={isShowPassword ? <EyeOff /> : <Eye />} onClick={clickIconHandler} />}
    />
  );
};

export default PasswordInput;
