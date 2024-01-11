export async function getNewToken({
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
