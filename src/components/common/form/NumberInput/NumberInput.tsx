'use client';

import { FieldValues, useController } from 'react-hook-form';
import Input, { InputProps } from '../Input';
import { ChangeEvent } from 'react';

const NumberInput = <T extends FieldValues>(props: InputProps<T>) => {
  const { name, control } = props;
  const { field } = useController<T>({ name, control });

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const updatedValue = evt.target.value.toString().replace(/((\D+)|(^(?:0+(?=[1-9])|0+(?=0$))))/g, '');
    field.onChange(updatedValue);
  };

  return <Input {...props} inputMode="numeric" onChange={changeHandler} autoComplete="off" />;
};

export default NumberInput;
