import { InputHTMLAttributes, ReactNode, useMemo } from 'react';
import { useController, UseControllerProps, FieldValues } from 'react-hook-form';
import { MdOutlineCancel } from 'react-icons/md';
import { PiWarningCircleBold } from 'react-icons/pi';
import IconButton from '@/components/common/IconButton';
import styles from './Input.module.scss';

export type InputProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & {
    icon?: ReactNode;
    label?: string;
    resetField: () => void;
  };

export type InputStatus = 'normal' | 'filled' | 'error';

const Input = <T extends FieldValues>({
  label,
  name,
  control,
  icon,
  resetField,
  ...props
}: InputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, control });

  const status = useMemo<InputStatus>(() => {
    if (error) {
      return 'error';
    } else if (field.value) {
      return 'filled';
    }
    return 'normal';
  }, [error, field.value]);

  const renderIcon = useMemo(() => {
    if (status === 'error') {
      return field.value.length > 0 ? (
        <IconButton onClick={resetField} icon={<MdOutlineCancel />} />
      ) : (
        <PiWarningCircleBold />
      );
    } else if (icon) {
      return icon;
    }

    return null;
  }, [field.value.length, icon, resetField, status]);

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
          {renderIcon && <span className={styles.icon}>{renderIcon}</span>}
        </span>
        {error && <span className={styles.message}>{error.message}</span>}
      </label>
    </div>
  );
};

export default Input;
