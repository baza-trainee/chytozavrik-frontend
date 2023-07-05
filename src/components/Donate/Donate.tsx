import { Button, Container, Typography } from '../common';
import styles from './Donate.module.scss';

const Donate = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Typography className={styles.title} component="h2" variant="h2">
          Допоможіть нам відкрити світ книг для дітей!
        </Typography>
        <Typography className={styles.text} component="p" variant="body">
          Разом ми змінюємо читання для дітей! Допоможіть нам створити доступ до українських книжок
          та захоплюючого веб-застосунку. Пожертвуйте сьогодні і відкрийте світ читання для молодого
          покоління!
        </Typography>
        <Button className={styles.button} color="secondary">
          Задонатити
        </Button>
      </Container>
    </section>
  );
};

export default Donate;