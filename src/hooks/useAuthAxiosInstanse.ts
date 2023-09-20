import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { axiosClient } from '@/services/axios';

export const useAuthAxiosInstanse = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const requestIntercept = axiosClient.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${session?.user?.token.access}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    return () => {
      axiosClient.interceptors.request.eject(requestIntercept);
      // axiosClient.interceptors.response.eject(responseIntercept);
    };
  }, [session]);

  return axiosClient;
};
