import { theme } from '@depromeet/theme';
import { Icon, Text, UserAvatar } from '@depromeet/toks-components';

import { Rank } from 'pages/StudyDetailPage/models/rankingList';

import { Item } from './style';

interface RankingItemProps {
  ranking?: number;
  rankItem: Rank;
}

const medals = ['ic-gold' as const, 'ic-silver' as const, 'ic-bronze' as const];

export function RankingItem({ rankItem }: RankingItemProps) {
  const { rank: ranking, user, score } = rankItem;
  const isMedalItem = (ranking?: number) => ranking && ranking <= 3;
  const convertNoneRanking = (ranking?: number) => (ranking ? `${ranking}.` : '-');

  return (
    <Item css={{ backgroundColor: isMedalItem(ranking) ? theme.colors.gray100 : theme.colors.gray110 }}>
      {isMedalItem(ranking) ? (
        <Icon height={32} iconName={medals[(ranking as number) - 1]} />
      ) : (
        <Text variant="body02" color="gray040" css={{ width: '28px', textAlign: 'center' }}>
          {convertNoneRanking(ranking)}
        </Text>
      )}
      <UserAvatar image={user.profileImageUrl} size="large" css={{ marginLeft: '12px' }} />
      <Text
        variant="body01"
        color="white"
        css={{
          marginLeft: '12px',
          flex: 1,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {user.nickname}
      </Text>
      <Text variant="body03" color="gray060" css={{ marginLeft: '12px' }}>
        {score ?? 0} Toks
      </Text>
    </Item>
  );
}
