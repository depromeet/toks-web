// import { NextRequest, NextResponse } from 'next/server';
// import { Session } from 'next-auth';

// import { auth } from './auth';

// export const HTTP_ONLY = process.env.NODE_ENV === 'development' ? false : true;

// async function getAuthStatus({
//   accessToken,
// }: {
//   accessToken: string;
// }): Promise<Response> {
//   if (accessToken !== '') {
//     return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/auth/status`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json; charset=utf-8',
//         'X-TOKS-AUTH-TOKEN': accessToken,
//       },
//     });
//   }

//   return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/auth/status`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8',
//     },
//   });
// }

// export async function middleware(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set('Content-Type', 'application/json');
//   const session = (await auth()) as Session;

//   console.log(session);

//   let accessCookieValue = '';
//   let refreshCookieValue = '';

//   if (session) {
//     accessCookieValue = session?.accessToken ?? '';
//     refreshCookieValue = session?.refreshToken ?? '';
//   }

//   if (accessCookieValue) {
//     requestHeaders.set('X-TOKS-AUTH-TOKEN', accessCookieValue);
//   }

//   const aT = accessCookieValue ?? '';
//   const rT = refreshCookieValue ?? '';

//   const res = await getAuthStatus({
//     accessToken: aT,
//   });

//   if (res.status === 200) {
//     requestHeaders.set('isLogin', 'true');
//     return NextResponse.next({
//       request: {
//         headers: requestHeaders,
//       },
//     });
//   } else if (res.status === 401) {
//     try {
//       // refreshToken으로 accessToken refetch하는 로직

//       const token = await (await getNewToken({ refreshToken: rT })).json();
//       //   만료된 토큰 /으로 redirect
//       if (token.errorCode === 'EXPIRED_TOKEN') {
//         return NextResponse.redirect(new URL('/', request.url));
//       } else if (token.data.accessToken) {
//         // accessToken이 있으면 header에 다시 토큰 넣고 쿠키 세팅
//         requestHeaders.set('X-TOKS-AUTH-TOKEN', token.data.accessToken);

//         // 쿠키에 다시 세팅하는 로직
//         const response = NextResponse.next();
//         response.cookies.set('accessToken', token.data.accessToken);
//         return response;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   requestHeaders.set('isLogin', 'false');
//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
// }

// export const config = {
//   matcher: ['/nickname', '/quiz/:path*', '/my-page', '/toks-main'],
// };

export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/nickname', '/quiz/:path*', '/my-page'],
};
