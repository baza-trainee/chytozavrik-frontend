import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { BsCheck } from 'react-icons/bs';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';

export type InputProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & {
    children?: ReactNode;
    color?: 'primary' | 'secondary';
  };

const Checkbox = <T extends FieldValues>({
  name,
  control,
  color = 'primary',
  children,
  ...props
}: InputProps<T>) => {
  const { field } = useController<T>({ name, control });
  return (
    <label className={styles.label}>
      <span className={classNames(styles['input-group'], styles[`input-group--${color}`])}>
        <BsCheck className={styles['input-checked-icon']} />
        <input className={styles.input} {...field} {...props} type="checkbox" />
      </span>
      {children && <span className={styles['label-text']}>{children}</span>}
    </label>
  );
};

export default Checkbox;
