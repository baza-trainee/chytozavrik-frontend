import { useMutation} from '@tanstack/react-query';
import { useAuthAxiosInstance } from '@/hooks';


export const useDeleteBooks = () => {
  const axios = useAuthAxiosInstance();

  const { mutate: deleteBook, isPending } = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`books/${id}/`);
    },
  });

  return { deleteBook, isPending };
};
