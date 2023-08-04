import WigwamBooks from '@/components/WigwamBooks/WigwamBooks';
import Container from '../../components/common/Container/Container';
import WigwamReadBooks from '@/components/WigwamReadBooks/WigwamReadBooks';
import styles from './wigwam.module.scss';

export default function Wigwam() {
  return (
    <main>
      <Container className={styles.wraper}>
        <WigwamReadBooks />
        <WigwamBooks />
      </Container>
    </main>
  );
}
