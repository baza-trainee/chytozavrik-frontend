import WigwamReadBooks from '@/app/(wigwam)/components/Wigwam/ReadBooks';
import WigwamQuiz from '@/app/(wigwam)/components/Wigwam/Quiz';
import { BooksResponse, BooksResults, BookType } from '@/types/WigwamBooks';
import { notFound } from 'next/navigation';
import { MonstersResponse } from '@/types/MonstersTypes';
import { fetch } from '@/services/axios';
import WigwamBooks from '@/app/(wigwam)/components/Wigwam/Books';
import WigwamMyMonsters from '@/app/(wigwam)/components/Wigwam/Monsters';
import Container from 'components/common/Container/Container';
import styles from './wigwam.module.scss';
import { log } from 'next/dist/server/typescript/utils';


interface WigwamProps {
  params: { childId: string };
}

export default async function Wigwam({ params: { childId } }: WigwamProps) {

  const booksReq = fetch<BooksResponse>(`users/me/children/${childId}/quizzes`);
  const monstersReq = fetch<MonstersResponse>(`users/me/children/${childId}/rewards/?page_size=8`);
  const [booksRes, monstersRes] = await Promise.all([booksReq, monstersReq]);

  if (booksRes.status === 'fail' || monstersRes.status === 'fail') notFound();

  const {results:  booksData} = booksRes.data
  const {results: monstersData } = monstersRes.data;

  return (
    <main>
      <Container className={styles.layout}>
        <WigwamReadBooks />
        <WigwamQuiz />
        <WigwamMyMonsters monstersData={monstersData} childId={childId}/>
        <WigwamBooks booksData={booksData} />
        <div className={styles.test}>
          Recommended
        </div>
      </Container>
    </main>
  );
}
