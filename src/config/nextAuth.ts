import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { getUserInfoService, signInService, token as apiToken } from '@/services/api';
import { Route } from '@/constants';
import { signOut } from 'next-auth/react';

const getMaxAge = () => {
  const isRememberMe = true;

  return isRememberMe ? 30 * 24 * 60 * 60 : 2 * 60 * 60; // 30 days : 2 hours
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          // Get token
          const serverToken = await signInService(
            credentials?.email as string,
            credentials?.password as string
          );
          // Check for errors
          if (serverToken.status === 'fail') {
            const errorMessage = serverToken.data.message;
            throw new Error(
              typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage)
            );
          }

          apiToken.access = serverToken.data.access;
          apiToken.refresh = serverToken.data.refresh;

          // Get user info
          const userInfo = await getUserInfoService();
          // Check for errors
          if (userInfo.status === 'fail') {
            const errorMessage = userInfo.data.message;
            throw new Error(
              typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage)
            );
          }

          const user: User = {
            ...userInfo.data,
            token: serverToken.data,
            id: userInfo.data.id.toString(),
          };

          if (user) {
            return user;
          }

          return null;
        } catch (error) {
          throw new Error((error as Error).message);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.user) {
        session.user = { ...token.user };
      }

      return session;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        token.user = { ...user };
      }

      if (token.user?.token.access) {
        const exp = (jwtDecode<JwtPayload>(token.user?.token.access).exp as number) * 1000;

        apiToken.access = token.user.token.access;
        apiToken.refresh = token.user.token.refresh;

        if (Date.now() - exp >= 0) {
          // TODO: Add refresh token request
          token.user.token.error = 'Session is expired.';
        }
      }

      return token;
    },
  },
  session: {
    maxAge: getMaxAge(),
  },
  pages: {
    signIn: Route.SIGN_IN,
  },
};
