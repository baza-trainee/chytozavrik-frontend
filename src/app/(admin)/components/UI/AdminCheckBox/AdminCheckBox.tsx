/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classNames from 'classnames';
import styles from 'components/common/form/Checkbox/Checkbox.module.scss';
import { Check } from 'lucide-react';

interface AdminCheckBoxProps {
  color?: 'primary' | 'secondary';
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: number;
}

const AdminCheckBox = ({ color = 'primary', className, onChange, id }: AdminCheckBoxProps) => {
  const inputId = `checkbox-${id}`;
  return (
    <div className={classNames(className)}>
      <label className={styles.label} htmlFor={inputId}>
        <span className={classNames(styles['input-group'], styles[`input-group--${color}`])}>
          <Check className={styles['input-checked-icon']} strokeWidth={4} />
          <input id={inputId} className={styles.input} type="checkbox" onChange={onChange} />
        </span>
      </label>
    </div>
  );
};

export default AdminCheckBox;
