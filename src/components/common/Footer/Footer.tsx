"use client";
import Link from "next/link";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Image from "next/image";
// import { Button } from "../Button/Button";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <Container className={classNames(styles.footerContainer, styles.footer)}>
      <Image
        src="/path432.png"
        width={64}
        height={54}
        alt="Logo"
        className={classNames(styles.logo)}
      />
    
          <ul>
              <li>Про проєкт</li>
              <li>До вігваму</li>
              <li><Link href='#'>Політика конфіденційності</Link></li>
              <li><Link href='#'>Правила поведінки на сайті</Link></li>
          </ul>
          
          <ul>
             <li><Link href="tel:+380636286630">+380 63 628 6630</Link></li>
             <Image
        src="/call.png"
        width={24}
        height={24}
        alt="Logo"
        className={classNames(styles.logo)}
      /><li><Link href='tel:+380675681788'>+380 67 568 1788</Link></li>
             <li><Link href='mailto:1111111@gmail.com'>1111111@gmail.com</Link></li> 
          </ul>
        
    
    </Container>
  );
};

export { Footer };