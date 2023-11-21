import WigwamBooks from 'components/Wigwam/WigwamBooks/WigwamBooks';
import Container from '../../../components/common/Container/Container';
import WigwamReadBooks from 'components/Wigwam/WigwamReadBooks/WigwamReadBooks';
import styles from './wigwam.module.scss';
import WigwamQuiz from 'components/Wigwam/WigwamQuiz/WigwamQuiz';
import WigwamMyMonsters from 'components/Wigwam/WigwamMyMonsters/WigwamMyMonsters';
import { fetch } from '@/services/axios';
import { BooksResponse, BookType } from '@/types/WigwamBooks';
import { notFound } from 'next/navigation';


interface WigwamProps {
  params: {childId : string}
}

export default async function Wigwam({params: { childId }} : WigwamProps) {
  const booksReq = fetch<BookType[]>(`users/me/children/${childId}/quizzes`)
  const [booksRes] = await Promise.all([booksReq]);

  if (booksRes.status === 'fail' ) notFound();
  const booksData: BookType[] = booksRes.data;

  return (
    <main>
      <Container className={styles.layout}>
        <div className={styles.wraper}>
          <WigwamReadBooks />
          <WigwamQuiz />
        </div>
        <WigwamBooks booksReq={booksData}/>
        <WigwamMyMonsters />
      </Container>
    </main>
  );
}
