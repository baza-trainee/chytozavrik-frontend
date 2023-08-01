'use client';

import { Route } from '@/constants';
import { signOut } from 'next-auth/react';
import React from 'react';

const page = () => {
  return (
    <div>
      <button onClick={() => signOut({ callbackUrl: Route.HOME })}>Logout</button>
    </div>
  );
};

export default page;
