import React from 'react';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getBooksService } from '@/services/api';
import BooksList from '@/app/(admin)/admin/books/components/BooksList';

const BooksPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['books'],
    queryFn: getBooksService,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BooksList />
    </HydrationBoundary>
  );
};

export default BooksPage;
