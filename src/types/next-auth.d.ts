import NextAuth, { DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import type { UserType, TokenType } from '@/types';

declare module 'next-auth' {
  interface Session {
    user: TokenType & DefaultUser;
  }
  interface User extends UserType, TokenType {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    user?: TokenType & DefaultUser;
  }
}
