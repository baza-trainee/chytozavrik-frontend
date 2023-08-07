import { getServerSession } from 'next-auth';
import { authOptions } from '@/config';

export async function getAccessToken() {
  const session = await getServerSession(authOptions);

  if (session) {
    return session.user.access;
  }

  return null;
}
