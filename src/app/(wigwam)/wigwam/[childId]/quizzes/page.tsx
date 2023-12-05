import Container from 'components/common/Container/Container';
import AllQuizzes from '@/app/(wigwam)/wigwam/[childId]/quizzes/components/AllQuizzes';

const Quizzes = async () => (
  <main>
    <Container>
      <AllQuizzes />
    </Container>
  </main>
);

export default Quizzes;
