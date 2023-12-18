import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getChildrenService } from '@/services/api';
import Lobby from './components/Lobby';

const LobbyPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['children'],
    queryFn: getChildrenService,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Lobby />
    </HydrationBoundary>
  );
};

export default LobbyPage;
