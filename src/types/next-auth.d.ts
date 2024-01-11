/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      id: string;
      email: string;
      name: string;
      image: string;
    } & DefaultSession['user'];
    accessToken: string;
    refreshToken: string;
  }
}
