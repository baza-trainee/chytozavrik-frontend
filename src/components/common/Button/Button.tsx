'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import type { LinkProps as NextLinkProps } from 'next/link';
import classNames from 'classnames';
import Spinner from '../Spinner/Spinner';
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
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'error';
  isLoading?: boolean;
  selected?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & (LinkProps | ButtonProps);

const Button = (props: Props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.component === 'link') {
    const {
      children,
      variant = 'filled',
      color = 'primary',
      isLoading,
      selected,
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
        data-selected={selected}
        {...otherProps}
      >
        {startIcon && <span className={styles['button-icon']}>{startIcon}</span>}
        {children}
        {endIcon && <span className={styles['button-icon']}>{endIcon}</span>}
        {isLoading && (
          <span>
            <Spinner />
          </span>
        )}
      </Link>
    );
  }
  const {
    children,
    variant = 'filled',
    color = 'primary',
    isLoading,
    selected,
    startIcon,
    endIcon,
    className,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        className,
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${color}`]
      )}
      data-selected={selected}
      {...otherProps}
    >
      {startIcon && <span className={styles['button-icon']}>{startIcon}</span>}
      {children}
      {endIcon && <span className={styles['button-icon']}>{endIcon}</span>}
      {isLoading === true && (
        <span className={styles.spinner}>
          <Spinner />
        </span>
      )}
    </button>
  );
};

export default Button;
