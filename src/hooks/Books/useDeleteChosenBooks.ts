'use client';

import { useAuthAxiosInstance } from '@/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useDeleteChosenBooks = () => {
  const axios = useAuthAxiosInstance();
  const queryClient = useQueryClient();
  const [deletingBooks, setDeletingBooks] = useState<number[]>([]);

  const { mutate: deleteChosenBooks } = useMutation({
    mutationFn: async (selected: number[]) => {
      setDeletingBooks(selected);
      await Promise.all(
        selected.map(async id => {
          await axios.delete(`books/${id}/`);
        })
      );
    },
    onSettled: () => setDeletingBooks([]),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });

  const handleDeleteBooks = (selectedBooks: number[]) => {
    setDeletingBooks(selectedBooks);
    deleteChosenBooks(selectedBooks);
  };

  return { handleDeleteBooks, deletingBooks };
};
