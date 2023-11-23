
import Container from 'components/common/Container/Container';
import AllQuizzes from '@/app/(wigwam)/wigwam/[childId]/quizzes/components/AllQuizzes';


export default async function Quizzes(){


  return (
    <main>
     <Container>
       <AllQuizzes/>
     </Container>
    </main>
  )
}

