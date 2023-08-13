import { Button, Typography } from '@/components/common';
import { Route } from '@/constants';
import Image from 'next/image';

type Props = {
  prize: string;
  onReplyQuiz: () => void;
};

const QuizPrize = ({ prize, onReplyQuiz }: Props) => {
  return (
    <div>
      <Image src={prize} alt="Призове зображення читозаврика" width={100} height={100} />
      <Typography component="h2" variant="h2">
        Молодець!
      </Typography>
      <Typography component="h2" variant="h2">
        Читозавр з’явиться у твоїй колекції
      </Typography>
      <div>
        <Button component="link" href={Route.WIGWAM} color="secondary">
          До вігваму
        </Button>
        <Button variant="outline" onClick={onReplyQuiz}>
          Пройти ще раз
        </Button>
      </div>
    </div>
  );
};

export default QuizPrize;
