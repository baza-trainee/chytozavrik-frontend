'use client'

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { axiosClient } from '@/services/axios';
import { useRefreshToken } from '@/hooks/useRefreshToken';

export const useAuthAxiosInstance = () => {
  const { data: session } = useSession();
  const refreshToken = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosClient.interceptors.request.use(
      async config => {
        if (session?.user?.token.access) {
          // Refresh token if needed before making the request
          await refreshToken();
          config.headers['Authorization'] = `Bearer ${session.user.token.access}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    const responseIntercept = axiosClient.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          await refreshToken(); // This may be redundant if the request interceptor is working correctly
          originalRequest.headers['Authorization'] = `Bearer ${session?.user?.token.access}`;
          return axiosClient(originalRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosClient.interceptors.request.eject(requestIntercept);
      axiosClient.interceptors.response.eject(responseIntercept);
    };
  }, [session, refreshToken]);

  return axiosClient;
};
