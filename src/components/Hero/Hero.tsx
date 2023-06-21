import { Container, Title } from 'components/common';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Title variant='h1' className={styles.title}>
          Розпочни свою велику книжкову пригоду!
        </Title>
        <p className={styles.text}>
          Інтерактивна вікторина для маленьких книголюбів, яка зробить процес читання ще цікавішим
        </p>
        <button className={styles.button} type='button'>
          Почати гру
        </button>
      </Container>
    </section>
  );
};

export default Hero;
