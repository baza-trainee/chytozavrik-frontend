import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { BsCheck } from 'react-icons/bs';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';

export type InputProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & {
    children?: ReactNode;
    color?: 'primary' | 'secondary';
  };

const Checkbox = <T extends FieldValues>({
  name,
  control,
  color = 'primary',
  className,
  children,
  ...props
}: InputProps<T>) => {
  const { field } = useController<T>({ name, control });
  return (
    <div className={classNames(className)}>
      <label className={styles.label}>
        <span className={classNames(styles['input-group'], styles[`input-group--${color}`])}>
          <BsCheck className={styles['input-checked-icon']} />
          <input className={styles.input} {...field} {...props} type="checkbox" />
        </span>
        {children && <span className={styles['label-text']}>{children}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
