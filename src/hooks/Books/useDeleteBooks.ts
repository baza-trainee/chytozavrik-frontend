import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthAxiosInstance } from '@/hooks';

export const useDeleteBooks = () => {
  const axios = useAuthAxiosInstance();
  const queryClient = useQueryClient();

  const { mutate: deleteBook, isPending } = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`books/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });

  return { deleteBook, isPending };
};
