import { rankingList } from './constants';
import { RankingItem } from '../RankingItem';
import { List } from './style';

export function RankingList() {
  return (
    <List>
      {rankingList.map(rankingItem => (
        <RankingItem {...rankingItem} />
      ))}
    </List>
  );
}
