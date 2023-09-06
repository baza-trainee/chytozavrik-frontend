import { useSession } from 'next-auth/react';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';

export const useFetch = () => {
  const session = useSession();

  return async (url: RequestInfo | URL, options?: RequestInit) =>
    await fetch(`${baseUrl}/${url}`, {
      headers: {
        Authorization: 'Bearer ' + session.data?.user.access,
        'Content-Type': 'application/json',
      },
      ...options,
    });
};
