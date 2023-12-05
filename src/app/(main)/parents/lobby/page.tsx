import { getChildrenService } from '@/services/api';
import Lobby from './components/Lobby';

const LobbyPage = async () => {
  const users = await getChildrenService();

  // eslint-disable-next-line no-console
  if (!users || users.status === 'fail') return console.error('Unauthorized user.');

  return (
    <main>
      <Lobby users={users.data} />
    </main>
  );
};

export default LobbyPage;
