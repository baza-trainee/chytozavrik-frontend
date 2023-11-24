'use client';

import { useSession } from 'next-auth/react';
import { axiosClient } from '@/services/axios';



export const useRefreshToken = () => {
  const { data: session } = useSession();
  const refreshToken = async () => {
    const res = await axiosClient.post('auth/token/refresh/', {
      refresh: session?.user?.token?.refresh,
    });
    if (session) {
      session.user.token.access = res.data.access;
    }
  };
  return refreshToken;
};

