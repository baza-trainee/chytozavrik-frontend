import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { Check } from 'lucide-react';
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
  const inputId = `input-${name}`;
  return (
    <div className={classNames(className)}>
      <label className={styles.label} htmlFor={inputId}>
        <span className={classNames(styles['input-group'], styles[`input-group--${color}`])}>
          <Check className={styles['input-checked-icon']} strokeWidth={4} />
          <input className={styles.input} {...field} {...props} type="checkbox" />
        </span>
        {children && <span className={styles['label-text']}>{children}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
