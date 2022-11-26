import { Children, ComponentProps, HTMLAttributes, ReactNode } from 'react';
import { QuizItem } from 'components/StudyDetailPage/QuizItem';
import { List } from './style';

const creator = {
  image: "https://asset.tokstudy.com/img_penguin.png",
  id: "13",
  userName: "윤두현",
  size: "large"
}

const absentee = [
  {
    image: "https://asset.tokstudy.com/img_penguin.png",
    id: "13",
    userName: "윤두현",
    size: "large"
  }, 
  {
    image: "https://asset.tokstudy.com/img_penguin.png",
    id: "14",
    userName: "현두윤",
    size: "large"
  }, 
  {
    image: "https://asset.tokstudy.com/img_penguin.png",
    id: "15",
    userName: "두현윤",
    size: "large"
  }
]

export function QuizList() {
  return (
    <List>
      <QuizItem
        weekNumber={2}
        title='오늘은 똑스 회식날~!'
        openDate={new Date('2022-11-27 10:00:00')}
        creator={creator}
        absentee={absentee}/>
      <QuizItem
        weekNumber={1}
        title='사용자 수에 따른 규모 확장성'
        openDate={new Date('2022-11-27 10:00:00')}
        creator={creator}
        absentee={absentee}/>
    </List>
  );
}
