import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthAxiosInstance } from '@/hooks';
import { useState } from 'react';

export const useDeleteBooks = () => {
  const axios = useAuthAxiosInstance();

  const [isDeleted, setIsDeleted] = useState(false);

  const { mutate: deleteBook, isPending } = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`books/${id}/`);
    },
    onSuccess: data => {
      setIsDeleted(true);
    },
  });

  return { deleteBook, isPending, isDeleted, setIsDeleted };
};
