import { Button, Container, Typography } from 'components/common';
import styles from './Hero.module.scss';
import { ArrowRight } from 'iconsax-react';

const Hero = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Typography component="h1" variant="h1" className={styles.title}>
          Розпочни свою велику книжкову пригоду!
        </Typography>
        <Typography component="p" variant="body" className={styles.text}>
          Інтерактивна вікторина для маленьких книголюбів, яка зробить процес читання ще цікавішим
        </Typography>
        <Button color="secondary" className={styles.button} endIcon={<ArrowRight size="24" />}>
          Почати гру
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
