import { FetchResponseType } from '@/types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';

export const useFetch = <T,>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const session = useSession();

  return {
    data,
    isLoading,
    error,
    fetch: async (url: RequestInfo | URL, options?: RequestInit): Promise<T | undefined> => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetch(`${baseUrl}/${url}`, {
          headers: {
            Authorization: 'Bearer ' + session.data?.user.token.access,
            'Content-Type': 'application/json',
          },
          ...options,
        });

        if (result.status === 404) throw new Error('Bad request');

        const data: FetchResponseType<T> = await result.json();

        if (data.status === 'fail') {
          throw new Error(data.data.message);
        }

        setData(data.data);

        return data.data;
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
  };
};
