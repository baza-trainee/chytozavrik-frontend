import WigwamBooks from '@/components/WigwamBooks/WigwamBooks';
import Container from '../../../components/common/Container/Container';
import WigwamReadBooks from '@/components/WigwamReadBooks/WigwamReadBooks';
import styles from './wigwam.module.scss';
import WigwamQuiz from '@/components/WigwamQuiz/WigwamQuiz';
import WigwamSlider from '@/components/WigwamSlider';

export default function Wigwam() {
  return (
    <main>
      <Container className={styles.layout}>
	   		<div className={styles.content}>
			   	<div className={styles.wraper}>
        	  		<WigwamReadBooks />
        	  		<WigwamQuiz />
        		</div>
				<WigwamSlider/>
			</div>
        	<WigwamBooks />
      </Container>
    </main>
  );
}
