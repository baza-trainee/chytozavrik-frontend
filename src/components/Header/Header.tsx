import Link from "next/link";
import styles from './Header.module.scss'
import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className }: Props) => {
    const classes = classNames(styles.header,styles.container, className);
    return (
        <header className={classes}>ddd{children}
            
        </header>
    )
}

export {Header}