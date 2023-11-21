import WigwamBooks from 'components/Wigwam/WigwamBooks/WigwamBooks';
import Container from '../../../components/common/Container/Container';
import WigwamReadBooks from 'components/Wigwam/WigwamReadBooks/WigwamReadBooks';
import styles from './wigwam.module.scss';
import WigwamQuiz from 'components/Wigwam/WigwamQuiz/WigwamQuiz';
import WigwamMyMonsters from 'components/Wigwam/WigwamMyMonsters/WigwamMyMonsters';

export default function Wigwam() {
  return (
    <main>
      <Container className={styles.layout}>
        <div className={styles.wraper}>
          <WigwamReadBooks />
          <WigwamQuiz />
        </div>
        <WigwamBooks />
        <WigwamMyMonsters />
      </Container>
    </main>
  );
}
