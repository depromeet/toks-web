import { theme } from '@depromeet/theme';
import { Image, Text, UserAvatar } from '@depromeet/toks-components';

import { User } from '../../../../../utils/userUtils';
import { Item } from './style';

type Ranking = number | undefined;

interface RankingItemProps {
  ranking?: Ranking;
  toks: number;
  user: User;
}

const medals = [
  'https://asset.tokstudy.com/ic-rank-gold.png',
  'https://asset.tokstudy.com/ic-rank-silver.png',
  'https://asset.tokstudy.com/ic-rank-bronze.png',
];

const isMedalItem = (ranking: Ranking) => ranking !== undefined && ranking <= 3;
const convertNoneRanking = (ranking: Ranking) => (ranking === undefined ? '-' : `${ranking}.`);

export function RankingItem({ ranking = undefined, toks, user }: RankingItemProps) {
  return (
    <Item css={{ backgroundColor: isMedalItem(ranking) ? theme.colors.gray100 : theme.colors.gray110 }}>
      {isMedalItem(ranking) ? (
        <Image width={24.08} height={32} src={medals[(ranking as number) - 1]} alt="메달 이미지 입니다." />
      ) : (
        <Text variant="body02" color="gray040" css={{ padding: '0 5.5px' }}>
          {convertNoneRanking(ranking)}
        </Text>
      )}
      <UserAvatar image={user.image} size="large" css={{ marginLeft: '12px' }} />
      <Text variant="body01" color="white" css={{ marginLeft: '12px', flex: 1 }}>
        {user.userName}
      </Text>
      <Text variant="body03" color="gray060" css={{ marginLeft: '12px', flex: 1 }}>
        {toks} Toks
      </Text>
    </Item>
  );
}
