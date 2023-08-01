import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Route } from '@/constants';
import { signInService } from '@/services/api';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const data = await signInService(
          credentials?.email as string,
          credentials?.password as string
        );

        if (data.non_field_errors) throw new Error(data.non_field_errors);

        const user = { id: '1', email: credentials?.email, accessToken: data.auth_token };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return baseUrl;
  //   },
  //   async session({ session, token, user }) {
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token;
  //   },
  // },
  pages: {
    signIn: Route.SIGN_IN,
  },
};
