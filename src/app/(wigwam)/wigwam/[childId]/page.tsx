import WigwamReadBooks from '@/app/(wigwam)/components/Wigwam/ReadBooks';
import WigwamQuiz from '@/app/(wigwam)/components/Wigwam/Quiz';
import { BookType } from '@/types/WigwamBooks';
import { notFound } from 'next/navigation';
import { MonstersResponse } from '@/types/MonstersTypes';
import { fetch } from '@/services/axios';
import WigwamBooks from '@/app/(wigwam)/components/Wigwam/Books';
import WigwamMyMonsters from '@/app/(wigwam)/components/Wigwam/Monsters';
import Container from 'components/common/Container/Container';
import styles from './wigwam.module.scss';

interface WigwamProps {
  params: { childId: string };
}

export default async function Wigwam({ params: { childId } }: WigwamProps) {
  const booksReq = fetch<BookType[]>(`users/me/children/${childId}/quizzes`);
  const [booksRes] = await Promise.all([booksReq]);
  if (booksRes.status === 'fail') notFound();
  const booksData: BookType[] = booksRes.data;
  const monstersReq = fetch<MonstersResponse>(`users/me/children/${childId}/rewards/?page_size=8`);
  const [monstersRes] = await Promise.all([monstersReq]);
  if (monstersRes.status === 'fail') notFound();
  const { results: monstersData } = monstersRes.data;

  return (
    <Container className={styles.layout}>
      <WigwamReadBooks />
      <WigwamQuiz />
      <WigwamMyMonsters monstersData={monstersData} />
      <WigwamBooks booksReq={booksData} />
      <div className={styles.test}>Recommended</div>
    </Container>
  );
}
