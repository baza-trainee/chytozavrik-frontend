// import Link from "next/link";

'use client'

import styles from './Header.module.scss'
import classNames from 'classnames';
import { ReactNode, useEffect, useState  } from 'react';
import Image from "next/image";
import { Button } from '../Button/Button'


type Props = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className }: Props) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
 useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    const classes = classNames(styles.header,styles.container, className);
  
  return (
      <header className={classes}>
      <div className={classNames(styles.headerContainer, { [styles.largeScreen]: screenWidth > 768 })}>
        <Image src="/path431.png" width={64} height={54} alt="Logo" className={classNames(styles.logo)}/>
        <div className={classNames(styles.buttonContainer)}>
        {screenWidth > 768 && <a href="#">Про проєкт</a>}
          <Button />
          </div>
      </div> 
      {children}
        </header>
    )
}

export {Header}