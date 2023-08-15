import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserInfoService, signInService, token } from '@/services/api';
import { Route } from '@/constants';

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

          token.access = serverToken.data.access;
          token.refresh = serverToken.data.refresh;

          // Get user info
          const userInfo = await getUserInfoService();
          // Check for errors
          if (userInfo.status === 'fail') {
            const errorMessage = userInfo.data.message;
            throw new Error(
              typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage)
            );
          }

          const user = { ...userInfo.data, ...serverToken.data, id: userInfo.data.id.toString() };

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
    async jwt({ token, user }) {
      if (user) {
        token.user = { ...user };
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
