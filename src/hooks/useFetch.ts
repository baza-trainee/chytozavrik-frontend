import { AxiosError } from 'axios';
import { useState } from 'react';

export const useFetch = <T, B>(fn: () => Function) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return {
    data,
    isLoading,
    error,
    fetch: async (body?: B): Promise<T | undefined> => {
      setIsLoading(true);
      setError(null);

      try {
        const { data: result } = await fn()(body);

        if (result.status === 'fail') {
          throw new Error(result.data.message);
        }

        setData(result.data);

        return result.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 404) {
            setError(error.message);
          } else {
            setError(error.response?.data.data.message);
          }
        } else {
          setError((error as Error).message);
        }
      } finally {
        setIsLoading(false);
      }
    },
  };
};
