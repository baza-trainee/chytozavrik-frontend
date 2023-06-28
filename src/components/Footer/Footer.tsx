'use client';
import Link from 'next/link';
import styles from './Footer.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
// import { Button } from "../Button/Button";
import Container from '../common/Container/Container';
import Typography from '../common/Typography/Typography';

const Footer = () => {
  return (
    <Container className={classNames(styles.footerContainer, styles.footer)}>
      <Image
        src="/path431-3.png"
        width={95}
        height={80}
        alt="Logo"
        className={classNames(styles.logo)}
      />

      <ul className={classNames(styles.list, styles.informationText)}>
        <Typography className={classNames(styles.informationText)} component="h3" variant="h3">
          Про проєкт
        </Typography>
        <Typography className={classNames(styles.informationText)} component="h3" variant="h3">
          До вігваму
        </Typography>
        <Typography className={classNames(styles.informationText)} component="h3" variant="h3">
          <Link href="#">Політика конфіденційності</Link>
        </Typography>
        <Typography className={classNames(styles.informationText)} component="h3" variant="h3">
          <Link href="#">Правила поведінки на сайті</Link>
        </Typography>
      </ul>

          <ul className={classNames(styles.list, styles.contacts)}>
              <li className={classNames(styles.text)}>
                  <Link href="tel:+380636286630" className={classNames(styles.listIcon)}>
                  <Image alt="Logo" src="/call.svg" width={24}
              height={24} className={classNames(styles.image)}></Image>+380 63 628 6630</Link>
              </li>   
            
        <li className={classNames(styles.text1)}>
          <Link href="tel:+380675681788">+380 67 568 1788</Link>
        </li>
        <li >
                  <Link href="mailto:1111111@gmail.com" className={classNames(styles.listIcon)}>
                      <Image alt="Logo" src="/sms.svg" width={24}
              height={24} className={classNames(styles.text1)}></Image>1111111@gmail.com</Link>
        </li>
      </ul>
    </Container>
  );
};

{/* <li>
                  <Image
              src="/call.svg"
              width={24}
              height={24}
              alt="Logo"
              className={classNames(styles.logo)}
            ></Image>
              </li>
        <li>
          <Link href="tel:+380636286630">+380 63 628 6630</Link>
        </li> */}

export default Footer;
