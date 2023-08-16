import { getServerSession } from 'next-auth';
import type { ChildType, FetchResponseType } from '@/types';
import { authOptions } from '@/config';
import Lobby from './components/Lobby';

const getChildren = async (): Promise<FetchResponseType<ChildType[]> | null> => {
  const session = await getServerSession(authOptions);

  if (!session?.user) return null;

  const result = await fetch(`https://chytozavrik-backend.vercel.app/api/v1/users/me/children/`, {
    headers: {
      Authorization: 'Bearer ' + session.user.access,
    },
  });

  return await result.json();
};

const LobbyPage = async () => {
  const users = await getChildren();

  if (!users || users.status === 'fail') return console.error('Unauthorized user.');

  return (
    <main>
      <Lobby users={users.data} />
    </main>
  );
};

export default LobbyPage;
