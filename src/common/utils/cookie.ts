export const getCookieMap = () => {
  const cookieArray: string[][] = document.cookie
    .split('; ')
    .map((entry) => entry.split('='));

  const iterableCookieArray: Array<readonly [string, string]> = cookieArray.map(
    ([key, value]) => [key, value]
  );

  return new Map(iterableCookieArray);
};
