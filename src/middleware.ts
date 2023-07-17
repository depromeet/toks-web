import { NextRequest, NextResponse } from 'next/server';

export const HTTP_ONLY = process.env.NODE_ENV === 'development' ? false : true;

async function getAuthStatus({
  accessToken,
}: {
  accessToken: string;
}): Promise<Response> {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/auth/status`, {
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
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/auth/renew`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      refreshToken,
    }),
  });
}

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('Content-Type', 'application/json');
  if (request.cookies.get('accessToken') != null) {
    requestHeaders.set(
      'X-TOKS-AUTH-TOKEN',
      request.cookies.get('accessToken')!.value
    );
  }

  const aT =
    request.cookies.get('accessToken') != null
      ? request.cookies.get('accessToken')!.value
      : '';

  const rT =
    request.cookies.get('refreshToken') != null
      ? request.cookies.get('refreshToken')!.value
      : '';

  const res = await getAuthStatus({
    accessToken: aT,
  });
  //
  console.log(res.status, 'resres');

  if (res.status === 200) {
    return NextResponse.next();
  } else if (res.status === 401) {
    try {
      // refreshToken으로 accessToken refetch하는 로직

      const token = await (await getNewToken({ refreshToken: rT })).json();
      //   만료된 토큰 /으로 redirect
      if (token.errorCode === 'EXPIRED_TOKEN') {
        return NextResponse.redirect(new URL('/', request.url));
      } else if (token.data.accessToken) {
        // accessToken이 있으면 header에 다시 토큰 넣고 쿠키 세팅
        requestHeaders.set('X-TOKS-AUTH-TOKEN', token.data.accessToken);

        // 쿠키에 다시 세팅하는 로직
        const response = NextResponse.next();
        response.cookies.set('accessToken', token.data.accessToken);

        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const config = {
  matcher: ['/nickname', '/quiz/:path*'],
};
