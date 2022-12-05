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
        weekNumber={3}
        title='퀴즈가 진행되고 있는 스터디 입니다'
        openDate={new Date('2022-12-05 14:24:00')}
        limitTime='02:00:00'
        creator={creator}
        absentee={absentee}/>
      <QuizItem
        weekNumber={2}
        title='곧 퀴즈가 시작되는 스터디 입니다'
        openDate={new Date('2022-12-06 05:10:00')}
        limitTime='02:15:00'
        creator={creator}
        absentee={absentee}/>
      <QuizItem
        weekNumber={1}
        title='만료된 스터디 입니다'
        openDate={new Date('2022-11-27 10:00:00')}
        limitTime='02:00:00'
        creator={creator}
        absentee={absentee}/>
    </List>
  );
}
