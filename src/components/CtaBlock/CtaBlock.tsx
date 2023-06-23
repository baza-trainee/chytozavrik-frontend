import { Button, Container, Typography } from '../common';

const CtaBlock = () => {
  return (
    <section>
      <Container>
        <Typography component="h2" variant="h2">
          Читозаврик уже чекає на Вас!
        </Typography>
        <Button color="secondary">Почати Гру</Button>
      </Container>
    </section>
  );
};

export default CtaBlock;
