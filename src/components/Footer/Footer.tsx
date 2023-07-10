'use client';
import Link from 'next/link';
import styles from './Footer.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
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
        className={classNames(styles.logoText)}
                      />
          </div>
          
            <div className={classNames(styles.wrapper)}>
              
              <ul className={classNames(styles.list, styles.informationText, styles.footerList)}>
                <div className={classNames(styles.class)}>
        <Typography className={classNames(styles.informationText)} component="h3" variant="footer">
          Про проєкт
        </Typography>
        <Typography className={classNames(styles.informationText)} component="h3" variant="footer">
          До вігваму
                  </Typography>
                  </div>
                <div className={classNames(styles.class1)}>
        <Typography className={classNames(styles.informationText, styles.decoration)} component="h3" variant="footer">
                    <Link href="#" className={classNames(styles.linkText)}>Політика <span className={classNames(styles.wbr)}>конфіденційності</span><p className={classNames(styles.wbr1)}>конфіденційності</p></Link>
        </Typography>
        <Typography className={classNames(styles.informationText, styles.decoration)} component="h3" variant="footer">
                  <Link href="#" className={classNames(styles.linkText)}>Правила<span className={classNames(styles.wbr)}> користування</span><p className={classNames(styles.wbr1)}>користування</p><span className={classNames(styles.wbr)}> сайтом</span><p className={classNames(styles.wbr1)}>сайтом</p>
                    </Link>
        </Typography>
                
                  </div>
      </ul>

              <ul className={classNames(styles.list, styles.contacts)}>
                <div className={classNames(styles.class2)}>
                      {/* <li className={classNames(styles.text)}> */}
                      <Typography className={classNames(styles.informationContact)} component="p" variant="h6">
                  <Link href="tel:+380636286630" className={classNames(styles.listIcon)}>
                  <Image alt="Logo" src="/phone.svg" width={18}
              height={18} className={classNames(styles.image)}></Image>+380 63 628 6630</Link>
                          {/* </li>    */}
                      </Typography>
                      

          <Typography className={classNames(styles.informationContactSecond)} component="p" variant="h6">  
        {/* <li className={classNames(styles.text1)}> */}
                  <Link href="tel:+380675681788" className={classNames(styles.listIcon)}>
                      <Image alt="Logo" src="/phone.svg" width={18}
              height={18} className={classNames(styles.image)}></Image>+380 67 568 1788</Link>
                          {/* </li> */}
                          </Typography>
        <Typography className={classNames(styles.informationMail)} component="p" variant="footer">
                  <Link href="mailto:1111111@gmail.com" className={classNames(styles.listIcon)}>
                      <Image alt="Logo" src="/mail.svg" width={18}
              height={18} className={classNames(styles.image)}></Image>1111111@gmail.com</Link>
              </Typography>
              </div>


 <div className={classNames(styles.class3)}>
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
                </div>
          </ul>
          
          </div>
         
        </div>
        
         <Typography className={classNames(styles.footerText)} component="p" variant="footer-end">
                Розробка Baza Trainee Ukraine 2023 Усі права захищені  
              </Typography>
         
              
              

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
