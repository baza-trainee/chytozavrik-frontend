'use client';

import { FieldValues, useController } from 'react-hook-form';
import Input, { InputProps } from '../Input';

const NumberInput = <T extends FieldValues>(props: InputProps<T>) => {
  const { name, control } = props;
  const { field } = useController<T>({ name, control });

  const convertValue = (value: any) => {
    const newValue = parseInt(value.toString());

    return isNaN(newValue) ? value : newValue;
  };

  return <Input {...props} inputMode="numeric" value={convertValue(field.value)} />;
};

export default NumberInput;
