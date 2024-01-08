import React from 'react';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import User from './user/User';

const UserList: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <User />
    </HydrationBoundary>
  );
};

export default UserList;
