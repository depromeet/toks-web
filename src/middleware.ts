import { NextRequest } from 'next/server';

export const HTTP_ONLY = process.env.NODE_ENV === 'development' ? false : true;

export async function getAuthStatus({
  accessToken,
}: {
  accessToken: string;
}): Promise<Response> {
  return fetch('https://api.tokstudy.com/api/v1/auth/status', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-TOKS-AUTH-TOKEN': accessToken,
    },
  });
}

async function getNewToken({
  refreshToken,
}: {
  refreshToken: string;
}): Promise<Response> {
  return fetch('https://api.tokstudy.com/api/v1/auth/renew', {
    method: 'POST',
    body: JSON.stringify({
      refreshToken,
    }),
  });
}

export async function middleware(request: NextRequest) {
  console.log('전역 미들웨어입니다.');
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Content-Type', 'application/json; charset=utf-8');
  requestHeaders.set('X-TOKS-AUTH-TOKEN', request.cookies.get('accessToken'));
  console.log(request.cookies);
  console.log(new Date());
  //   const aT =
  //     request.cookies.get('accessToken') != null
  //       ? request.cookies.get('accessToken').value
  //       : '';

  //   const rT = request.cookies.get('refreshToken');
  //   const res = await getAuthStatus({
  //     accessToken: aT,
  //   });
  //   console.log(res.status);
  //   //   const token = getNewToken({ refreshToken: rT });

  //   if (res.status === 200) {
  //     return NextResponse.next();
  //   } else if (res.status === 401) {
  //     try {
  //       const token = await getNewToken({ refreshToken: rT });
  //       console.log(token, 'tokentoken');
  //     } catch (error) {
  //       console.log(error);
  //       NextResponse.redirect('/');
  //     }
  //     // refreshToken으로 accessToken refetch하는 로직
  //   }
}

export const config = {
  matcher: '/:path*',
};
