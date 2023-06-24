import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type Props = {
  children: ReactNode;
  type?: HTMLButtonElement['type'];
  className?: string;
  variant?: 'filled' | 'outline' | 'text';
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({
  children,
  type = 'button',
  onClick,
  className,
  variant = 'filled',
  color = 'primary',
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
    >
      {children}
    </button>
  );
};

export default Button;
