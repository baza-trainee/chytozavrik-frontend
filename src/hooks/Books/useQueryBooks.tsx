import { useSession } from 'next-auth/react';
import { useAuthAxiosInstance } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '@/constants/api';

export const useQueryBooks = ({
  currentPage,
  searchValue,
}: {
  currentPage: number;
  searchValue: string | null;
}) => {
  const { status } = useSession();
  const axios = useAuthAxiosInstance();

  const {
    data: books,
    isLoading: booksLoading,
    error: fetchError,
  } = useQuery({
    queryKey: ['books', currentPage, searchValue],
    queryFn: async () => {
      const query = searchValue ? `search=${encodeURIComponent(searchValue)}` : '';
      const res = await axios(`${BASE_URL}/books?${query}&page=${currentPage}&page_size=7`);
      return res.data.data;
    },
    enabled: status === 'authenticated',
  });

  return { books, booksLoading, fetchError };
};
