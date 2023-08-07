'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import type { LinkProps as NextLinkProps } from 'next/link';
import classNames from 'classnames';
import styles from './Button.module.scss';

type LinkProps = NextLinkProps & {
  component: 'link';
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  component?: 'button';
};

type Props = {
  children: ReactNode;
  className?: string;
  variant?: 'filled' | 'outline' | 'text';
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & (LinkProps | ButtonProps);

const Button = (props: Props) => {
  if (props.component === 'link') {
    const {
      children,
      variant = 'filled',
      color = 'primary',
      startIcon,
      endIcon,
      className,
      ...otherProps
    } = props;

    return (
      <Link
        className={classNames(
          className,
          styles.button,
          styles[`button--${variant}`],
          styles[`button--${color}`]
        )}
        {...otherProps}
      >
        {startIcon && <span className={styles['button-icon']}>{startIcon}</span>}
        {children}
        {endIcon && <span className={styles['button-icon']}>{endIcon}</span>}
      </Link>
    );
  } else {
    const {
      children,
      variant = 'filled',
      color = 'primary',
      startIcon,
      endIcon,
      className,
      ...otherProps
    } = props;

    return (
      <button
        className={classNames(
          className,
          styles.button,
          styles[`button--${variant}`],
          styles[`button--${color}`]
        )}
        {...otherProps}
      >
        {startIcon && <span className={styles['button-icon']}>{startIcon}</span>}
        {children}
        {endIcon && <span className={styles['button-icon']}>{endIcon}</span>}
      </button>
    );
  }
};

export default Button;
