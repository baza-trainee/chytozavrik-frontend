import Lobby from './components/Lobby';
import { getChildrenService } from '@/services/api';

const LobbyPage = async () => {
  const users = await getChildrenService();

  if (!users || users.status === 'fail') return console.error('Unauthorized user.');

  return (
    <main>
      <Lobby users={users.data} />
    </main>
  );
};

export default LobbyPage;
