import { useSession } from 'next-auth/react';
import { useAuthAxiosInstance } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '@/constants/api';

export const useQueryUsers = () => {
  const { status } = useSession();
  const axios = useAuthAxiosInstance();

  const {
    data: users,
    isLoading: usersLoading,
    error: fetchError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/users`);
      return res.data.data;
    },
    enabled: status === 'authenticated',
  });

  return { users, usersLoading, fetchError };
};
