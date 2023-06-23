import { Button, Container, Typography } from '../common';
import styles from './CtaBlock.module.scss';

const CtaBlock = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Typography className={styles.title} component="h2" variant="h2">
          Читозаврик уже чекає на Вас!
        </Typography>
        <Button className={styles.button} color="secondary">
          Почати Гру
        </Button>
      </Container>
    </section>
  );
};

export default CtaBlock;
