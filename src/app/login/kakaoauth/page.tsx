'use client';

import { useSearchParams } from 'next/navigation';

const Kakaoauth = () => {
  const params = useSearchParams();

  const accessToken = params.get('accessToken');
  const refreshToken = params.get('refreshToken');

  console.log(accessToken, refreshToken);

  //   if (accessToken && refreshToken) {
  //     authToken.destroy();

  //     cookie.save('accessToken', accessToken, {
  //       path: '/',
  //       httpOnly: HTTP_ONLY,
  //     });
  //     cookie.save('refreshToken', refreshToken, {
  //       path: '/',
  //       httpOnly: HTTP_ONLY,
  //     });
  //   }
};

export default Kakaoauth;
