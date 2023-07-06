import Container from '../common/Container/Container';
import Typography from '../common/Typography/Typography';
import styles from './About.module.scss';

export default function About() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Typography component="h2" variant="h2" className={styles.title}>
          Читання стає захоплюючою грою
        </Typography>
        <div className={styles.about__row}>
          <Typography variant="body" component="p" className={styles.text}>
            Важко переоцінити вплив читання на життя людини. Широкий світогляд, розвиненість,
            креативність та вміння формулювати свої думки - це позитивні наслідки від читання.
          </Typography>
          <Typography variant="body" component="p" className={styles.text}>
            Додаток розроблений спеціально для дітей віком від 6 до 9 років. Захоплюючі книжкові
            вікторини дозволяють не тільки закріпити знання про прочитане а ще й розвивати розумові
            навички.
          </Typography>
        </div>
      </Container>
    </section>
  );
}
