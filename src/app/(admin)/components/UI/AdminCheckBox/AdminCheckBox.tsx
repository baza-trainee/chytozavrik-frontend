/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classNames from 'classnames';
import styles from 'components/common/form/Checkbox/Checkbox.module.scss';
import { Check } from 'lucide-react';

interface AdminCheckBoxProps {
  color?: 'primary' | 'secondary';
  className?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AdminCheckBox = ({
  color = 'primary',
  className,
  checked = false,
  onChange,
}: AdminCheckBoxProps) => (
  <div className={classNames(className)}>
    <label className={styles.label} htmlFor="checkbox">
      <span className={classNames(styles['input-group'], styles[`input-group--${color}`])}>
        <Check className={styles['input-checked-icon']} strokeWidth={4} />
        <input
          id="checkbox"
          className={styles.input}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </span>
    </label>
  </div>
);

export default AdminCheckBox;
