import { useQuery } from '@tanstack/react-query';

import { NoticeSlider } from '@/common';

import { SkeletonSlider } from './SkeletonSlider';
import { QUERY_KEYS } from '../../constants/queryKeys';
import { getNotices } from '../../remotes/notice';

export const MainPageSlider = () => {
  const {
    data: notices,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: [QUERY_KEYS.GET_NOTICES],
    queryFn: async () => {
      try {
        return await getNotices();
      } catch (err) {
        throw new Error('배너를 가져오는데 실패했습니다.');
      }
    },
  });

  if (isLoading) {
    return <SkeletonSlider />;
  }

  if (isSuccess) {
    const imageInfo = notices.bottomBanners.map((el) => {
      return { imageUrl: el.imageUrl, landingUrl: el.landingUrl };
    });
    return <NoticeSlider images={imageInfo} />;
  }

  return null;
};
