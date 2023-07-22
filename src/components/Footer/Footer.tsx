'use client';
import Link from 'next/link';
import styles from './Footer.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Container from '../common/Container/Container';
import Typography from '../common/Typography/Typography';
import List from '../common/List/List';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <Container className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo-footer.svg"
              width={58}
              height={50}
              alt="Logo"
              className={styles.logo}
            />
            <Image
              src="/chytozavryk-footer.svg"
              width={120}
              height={16}
              alt="Logo"
              className={styles.logoText}
            />
          </div>

          <div className={styles.wrapper}>
            <div className={classNames(styles.list, styles.informationText, styles.footerList)}>
              <ul className={styles.class}>
                <List className={styles.informationText} component="li" variant="footer">
                  Про проєкт
                </List>
                <List className={styles.informationText} component="li" variant="footer">
                  До вігваму
                </List>
              </ul>
              <ul className={styles.class1}>
                <List className={styles.informationText} component="li" variant="footer">
                  <Link href="#" className={styles.linkText}>
                    Політика конфіденційності
                  </Link>
                </List>

                <List className={styles.informationText} component="li" variant="footer">
                  <Link href="#" className={styles.linkText}>
                    Правила користування сайтом
                  </Link>
                </List>
              </ul>
            </div>

            <div className={classNames(styles.list, styles.contacts)}>
              <ul>
                <List className={styles.informationContact} component="li" variant="h6">
                  <Link href="tel:+380636286630" className={styles.listIcon}>
                    <Phone
                      
                      
                      
                      width={18}
                      height={18}
                      className={styles.image}
                    ></Phone>
                    +380 63 628 6630
                  </Link>
                </List>

                <List className={styles.informationContactSecond} component="li" variant="h6">
                  <Link href="tel:+380675681788" className={styles.listIcon}>
                    <Phone
                      
                      width={18}
                      height={18}
                      className={styles.image}
                    ></Phone>
                    +380 67 568 1788
                  </Link>
                </List>
                <List className={styles.informationMail} component="li" variant="footer">
                  <Link href="mailto:1111111@gmail.com" className={styles.listIcon}>
                    <Mail
                      
                      width={18}
                      height={18}
                      className={styles.image}
                    ></Mail>
                    1111111@gmail.com
                  </Link>
                </List>
              </ul>

              <div className={styles.class3}>
                <ul className={styles.social}>
                  <List component="li" variant="h3">
                    <Link href="#">
                      <Facebook
                        href="https://www.facebook.com/"
                        target="_blank"
                        width={32}
                        height={32}
                        className={styles.socialImage}
                      ></Facebook>
                    </Link>
                  </List>
                  <List component="li" variant="h3">
                    <Link href="#">
                      <Instagram
                        href="https://www.instagram.com/"
                        target="_blank"
                        width={32}
                        height={32}
                        className={styles.socialImage}
                      ></Instagram>
                    </Link>
                  </List>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Typography className={styles.footerText} component="p" variant="footer-end">
          Розробка Baza Trainee Ukraine 2023 Усі права захищені
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
