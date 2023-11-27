import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import styles from './LinkButton.module.scss';
import { usePathname } from 'next/navigation';
import { LinkProps as NextLinkProps } from 'next/dist/client/link';

type LinkProps = NextLinkProps & {
  component: 'link';
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  component?: 'button';
};

type LinkButtonProps = {
  href: string,
  anchor: string,
  icon: ReactNode,
  iconOpen?: ReactNode,
} & (LinkProps | ButtonProps)

const LinkButton = (props : LinkButtonProps) => {
  const pathname = usePathname();

  const children = (
    <>
      <div>{props.icon}</div>
      {props.anchor}
      {props.iconOpen &&
        <div className={styles.arrow}>
          {props.iconOpen}
        </div>
      }
    </>
  );

  if (props.component === 'link') {
    const {
      href,
      anchor,
      icon,
      iconOpen,
      ...otherProps
    } = props;

    return (
      <Link href={href} className={`${styles.link} ${pathname === href && styles.active}`} {...otherProps}>
        {children}
      </Link>
    )

  } else {
    const {
      href,
      anchor,
      icon,
      iconOpen,
      ...otherProps
    } = props;

    return (
      <button
        type="button"
        className={`${styles.link} ${pathname === href && styles.active}`}
        {...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    )
  }

};

export default LinkButton;