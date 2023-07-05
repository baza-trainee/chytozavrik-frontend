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
      <footer>
      <Container className={classNames(styles.footer)}>
          <Container className={classNames(styles.footer1)}>
            
              <div className={classNames(styles.footerContainer)}>
                  <div className={classNames(styles.logoContainer)}>
      <Image
        src="/logo-footer.svg"
        width={58}
        height={50}
        alt="Logo"
        className={classNames(styles.logo)}
                  />
                  <Image
        src="/chytozavryk-footer.svg"
        width={120}
        height={16}
        alt="Logo"
        className={classNames(styles.logo)}
                      />
          </div>
          
        <div className={classNames(styles.wrapper)}>
      <ul className={classNames(styles.list, styles.informationText,styles.footerList)}>
        <Typography className={classNames(styles.informationText)} component="h3" variant="h3">
          Про проєкт
        </Typography>
        <Typography className={classNames(styles.informationText)} component="h3" variant="h3">
          До вігваму
        </Typography>
        <Typography className={classNames(styles.informationText, styles.decoration)} component="h3" variant="h3">
          <Link href="#" >Політика <span className={classNames(styles.wbr)}>конфіденційності</span><p className={classNames(styles.wbr1)}>конфіденційності</p></Link>
        </Typography>
        <Typography className={classNames(styles.informationText, styles.decoration)} component="h3" variant="h3">
                  <Link href="#">Правила поведінки <span className={classNames(styles.wbr)}>на сайті</span><p className={classNames(styles.wbr1)}>на сайті</p>
                    </Link>
        </Typography>
      </ul>

          <ul className={classNames(styles.list, styles.contacts)}>
                      {/* <li className={classNames(styles.text)}> */}
                      <Typography className={classNames(styles.informationContact)} component="p" variant="p">
                  <Link href="tel:+380636286630" className={classNames(styles.listIcon)}>
                  <Image alt="Logo" src="/phone.svg" width={18}
              height={18} className={classNames(styles.image)}></Image>+380 63 628 6630</Link>
                          {/* </li>    */}
                      </Typography>
                      

          <Typography className={classNames(styles.informationContactSecond)} component="p" variant="p">  
        {/* <li className={classNames(styles.text1)}> */}
                  <Link href="tel:+380675681788" className={classNames(styles.listIcon)}>
                      <Image alt="Logo" src="/phone.svg" width={18}
              height={18} className={classNames(styles.image)}></Image>+380 67 568 1788</Link>
                          {/* </li> */}
                          </Typography>
        <Typography className={classNames(styles.informationMail)} component="h3" variant="h3">
                  <Link href="mailto:1111111@gmail.com" className={classNames(styles.listIcon)}>
                      <Image alt="Logo" src="/mail.svg" width={18}
              height={18} className={classNames(styles.image)}></Image>1111111@gmail.com</Link>
              </Typography>
              



              <div className={classNames(styles.social)}>
            
            <Typography  component="h3" variant="h3">
                  <Link href="#" >
                      <Image alt="Logo" src="/facebook.svg" width={32}
              height={32} className={classNames(styles.socialImage)}></Image></Link>
        </Typography>
                  <Typography  component="h3" variant="h3">
                  <Link href="#" >
                      <Image alt="Logo" src="/insta.svg" width={32}
              height={32} className={classNames(styles.socialImage)}></Image></Link>
                </Typography>
                </div>
          </ul>
          
          </div>
         
        </div>
        
         <p className={classNames(styles.footerText)}>
                Розробка Baza Trainee Ukraine 2023 Усі права захищені  
              </p>
         
              
              

              {/* <ul className={classNames(styles.socialLink, styles.list)}>
                  <li >
                  <Link href="#" className={classNames(styles.listIcon)}>
                      <Image alt="Logo" src="/facebook.svg" width={32}
              height={32} className={classNames(styles.image)}></Image></Link>
        </li>
                  <li >
                  <Link href="#" className={classNames(styles.listIcon, styles.iconInsta)}>
                      <Image alt="Logo" src="/insta.svg" width={32}
              height={32} className={classNames(styles.image)}></Image></Link>
        </li>
              </ul> */}
          
        </Container>
       
      </Container>
      </footer>
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
