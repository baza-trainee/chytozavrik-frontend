import NextAuth, { DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import type { UserType, TokenType } from '@/types';

type AppToken = TokenType & {
  error?: string | null;
};

interface AppUser extends DefaultUser{
  token: AppToken;
}

declare module 'next-auth' {
  interface Session {
    user: AppUser;
  }
  interface User extends AppUser {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    user?: AppUser;
  }
}
