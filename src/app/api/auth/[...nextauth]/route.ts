/* eslint-disable @typescript-eslint/no-unused-vars */
// GET http://localhost:3000/api/auth/{dynamic}

import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

import { getFirstUserInfo } from '@/common';

const handlers = NextAuth({
  callbacks: {
    async signIn({ account }) {
      // const response = await getFirstUserInfo({
      //   accessToken: account?.access_token as string,
      // }).then((res) => res.json());

      // console.log(response);
      // if (response.status === 200) {
      //   return true;
      // }

      // return false;
      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account?.access_token;
        token.refreshToken = account?.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      return session;
    },
  },
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
});

export { handlers as GET, handlers as POST };
