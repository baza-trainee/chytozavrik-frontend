import { InputHTMLAttributes, ReactNode, useMemo } from 'react';
import { useController, UseControllerProps, FieldValues } from 'react-hook-form';
import { MdOutlineCancel } from 'react-icons/md';
import styles from './Input.module.scss';

export type InputProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & {
    icon?: ReactNode;
    label?: string;
  };

export type InputStatus = 'normal' | 'filled' | 'error';

const Input = <T extends FieldValues>({ label, name, control, icon, ...props }: InputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, control });

  const status = useMemo<InputStatus>(() => {
    if (error) {
      return 'error';
    } else if (field.value.length > 0) {
      return 'filled';
    }
    return 'normal';
  }, [error, field.value]);

  return (
    <div className={styles.group} data-status={status}>
      <label className={styles.label}>
        {label && <span className={styles['label-text']}>{label}</span>}
        <span className={styles['input-group']}>
          <input
            className={styles.input}
            {...field}
            value={field.value === 0 ? '' : field.value}
            {...props}
          />
          {(icon || status === 'error') && (
            <span className={styles.icon}>{<MdOutlineCancel />}</span>
          )}
        </span>
        {error && <span className={styles.message}>{error.message}</span>}
      </label>
    </div>
  );
};

export default Input;
