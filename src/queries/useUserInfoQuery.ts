import { useQuery } from '@tanstack/react-query';

export const useUserInfoQuery = (accessToken?: string) => {
  return useQuery({
    queryKey: ['userInfo', accessToken],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/auth/my-infos`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error('Error while fetching user info');
      }
    },
    enabled: Boolean(accessToken),
  });
};
