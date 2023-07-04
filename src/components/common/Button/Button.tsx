'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  type?: HTMLButtonElement['type'];
  className?: string;
  variant?: 'filled' | 'outline' | 'text';
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
};

const Button = ({
  children,
  type = 'button',
  onClick,
  className,
  variant = 'filled',
  color = 'primary',
  startIcon = null,
  endIcon = null,
  ...props
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        className,
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${color}`]
      )}
      {...props}
    >
      {startIcon && <span className={styles['button-icon']}>{startIcon}</span>}
      {children}
      {endIcon && <span className={styles['button-icon']}>{endIcon}</span>}
    </button>
  );
};

export default Button;
