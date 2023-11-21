import { useState } from 'react';
import { AxiosError, Method } from 'axios';
import { useAuthAxiosInstanse } from './useAuthAxiosInstanse';
import { FetchResponseType } from '@/types';

export const useFetch = <T, B>() => {
  const axios = useAuthAxiosInstanse();
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return {
    data,
    isLoading,
    error,
    fetch: async (
      url: string,
      method: Method = 'GET',
      data?: B
    ): Promise<FetchResponseType<T> | undefined> => {
      setIsLoading(true);
      setError(null);

      try {
        const { data: result } = await axios.request<FetchResponseType<T>>({
          url,
          method,
          data,
        });

        if (result.status === 'fail') {
          throw new Error(result.data.message);
        }

        setData(result.data);

        return result;
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
