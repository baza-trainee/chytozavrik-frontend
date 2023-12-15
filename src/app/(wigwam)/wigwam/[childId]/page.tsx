import { notFound } from 'next/navigation';
import WigwamReadBooks from '@/app/(wigwam)/components/Wigwam/ReadBooks';
import WigwamQuiz from '@/app/(wigwam)/components/Wigwam/Quiz';
import { BooksResponse, BookType } from '@/types/WigwamBooks';
import { MonstersResponse } from '@/types/Monsters';
import { LastquizType } from '@/types/WigwamQuiz';
import { RecBookType, RecBooksResponse } from '@/types/RecomendedBooks';
import { fetch } from '@/services/axios';
import WigwamBooks from '@/app/(wigwam)/components/Wigwam/Books';
import WigwamMyMonsters from '@/app/(wigwam)/components/Wigwam/Monsters';
import RecomendedBooks from '@/app/(wigwam)/components/Wigwam/RecomendedBooks/RecomendedBooks';
import Container from 'components/common/Container/Container';
import styles from './wigwam.module.scss';

interface WigwamProps {
  params: { childId: string };
}

const Wigwam = async ({ params: { childId } }: WigwamProps) => {
  const booksReq = fetch<BooksResponse>(`users/me/children/${childId}/quizzes`);
  const monstersReq = fetch<MonstersResponse>(`users/me/children/${childId}/rewards/?page_size=8`);
  const wigwamQuizReq = fetch<LastquizType>(`users/me/children/${childId}`);
  const recBooksReq = fetch<RecBooksResponse>(`recommendation-books`);

  const [booksRes, monstersRes, wigwamQuizRes, recBooksRes] = await Promise.all([
    booksReq,
    monstersReq,
    wigwamQuizReq,
    recBooksReq,
  ]);

  if (booksRes.status === 'fail' || monstersRes.status === 'fail') notFound();

  const { results: booksData } = booksRes.data;
  const { results: monstersData } = monstersRes.data;

  let wigwamQuizData: LastquizType | undefined;

  if ('id' in wigwamQuizRes.data) {
    wigwamQuizData = wigwamQuizRes.data;
  } else {
    console.error('Error fetching last quiz data', wigwamQuizRes.data.message);
  }

  if (recBooksRes.status === 'fail') {
    console.error('Error fetching recommended books', recBooksRes.data.message);
  }

  let recBooksData: RecBookType[] = [];

  if ('results' in recBooksRes.data) {
    recBooksData = recBooksRes.data.results as RecBookType[];
  } else {
    console.error('Error fetching recommended books:', recBooksRes.data.message);
  }

  const selectedBook =
    booksData.find(book => book.id === parseInt(wigwamQuizData?.last_quiz_id || '', 10)) ||
    ({} as BookType);

  return (
    <main>
      <Container className={styles.layout}>
        <WigwamReadBooks wigwamQuizItem={wigwamQuizData} />
        {booksData.length > 0 && wigwamQuizData && (
          <WigwamQuiz wigwamQuizItem={wigwamQuizData} booksItem={selectedBook} />
        )}
        <WigwamMyMonsters monstersData={monstersData} />
        <WigwamBooks
          booksData={booksData}
          wigwamQuizData={wigwamQuizData}
          next={booksRes.data.next}
        />
        <div className={styles.test}>
          <RecomendedBooks
            items={recBooksData.map(item => item.cover_image)}
            recBooksData={recBooksData}
            booksData={booksData}
            wigwamQuizData={wigwamQuizData}
          />
        </div>
      </Container>
    </main>
  );
};

export default Wigwam;
