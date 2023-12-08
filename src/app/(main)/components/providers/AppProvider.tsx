'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const AppProvider = ({ children }: Props) => <SessionProvider>{children}</SessionProvider>;

export default AppProvider;
