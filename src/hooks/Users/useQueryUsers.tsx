import { useSession } from 'next-auth/react';
import { useAuthAxiosInstance } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '@/constants/api';

interface useQueryUsers {
  currentPage: number;
  searchValue: string | null;
  page: 'users';
  select?: ((data: any) => any) | undefined;
}

export const useQueryUsers = ({ currentPage, searchValue, page, ...rest }: useQueryUsers) => {
  const { status } = useSession();
  const axios = useAuthAxiosInstance();

  const {
    data: fechedUsers,
    isLoading: usersLoading,
    error: fetchError,
  } = useQuery({
    queryKey: ['users', currentPage, searchValue],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/users`);
      return res.data.data;
    },
    enabled: status === 'authenticated',
    ...rest,
  });

  return { fechedUsers, usersLoading, fetchError };
};
