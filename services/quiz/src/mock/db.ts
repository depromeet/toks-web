import { QuizResponse } from '@depromeet/toks-components/src/types/quiz';
import { User } from '@depromeet/toks-components/src/types/user';

import { RankResponse } from 'pages/StudyDetailPage/models/rankingList';

const creator = {
  userId: 13,
  profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
  nickname: '윤두현1',
} as User;

const absentee = [
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 13,
    nickname: '윤두현1',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 14,
    nickname: '현두윤2',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 15,
    nickname: '두현윤3',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 16,
    nickname: '윤두현4',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 17,
    nickname: '현두윤5',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 18,
    nickname: '두현윤6',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 19,
    nickname: '나머지1',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 20,
    nickname: '나머지2',
  },
] as User[];

const members = [
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 13,
    nickname: '윤두현1',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 14,
    nickname: '현두윤2',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 15,
    nickname: '두현윤3',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 16,
    nickname: '윤두현4',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 17,
    nickname: '현두윤5',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 18,
    nickname: '두현윤6',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 19,
    nickname: '나머지1',
  },
  {
    profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
    userId: 20,
    nickname: '나머지2',
  },
] as User[];

export const studyInfo = {
  studyId: 12,
  title: '아키텍쳐 크리너스너스너스너스너스',
  description:
    '동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 ',
  studyTags: ['북 스터디', '기술 스터디', 'JavaScript'],
  members,
};

const realTimestamp = new Date().toISOString();

export const quizList: QuizResponse[] = [
  {
    quizId: 77,
    quiz: '퀴즈가 진행되고 있는 스터디 입니다',
    quizType: 'O_X',
    description: '설명입니다.',
    startedAt: '2022-12-30T16:08:00',
    endedAt: '2022-12-30T18:08:00',
    durationOfSecond: 7200,
    timestamp: realTimestamp,
    creator,
    unSubmitters: absentee,
    studyId: 1,
    quizStatus: 'DONE',
  },
  {
    quizId: 66,
    quiz: '만료된 퀴즈 입니다 66',
    quizType: 'O_X',
    description: '설명입니다.',
    startedAt: '2022-12-07T21:00:00',
    endedAt: '2022-12-07T23:00:00',
    durationOfSecond: 7200,
    timestamp: '2022-12-11T23:55:13.751+09:00',
    creator,
    unSubmitters: absentee,
    studyId: 1,
    quizStatus: 'DONE',
  },
  {
    quizId: 55,
    quiz: '만료된 퀴즈 입니다 55',
    quizType: 'O_X',
    description: '설명입니다.',
    startedAt: '2022-12-07T21:00:00',
    endedAt: '2022-12-07T23:00:00',
    durationOfSecond: 7200,
    timestamp: '2022-12-11T23:55:13.751+09:00',
    creator,
    unSubmitters: absentee,
    studyId: 1,
    quizStatus: 'DONE',
  },
  {
    quizId: 44,
    quiz: '만료된 퀴즈 입니다 44',
    quizType: 'O_X',
    description: '설명입니다.',
    startedAt: '2022-12-07T21:00:00',
    endedAt: '2022-12-07T23:00:00',
    durationOfSecond: 7200,
    timestamp: '2022-12-11T23:55:13.751+09:00',
    creator,
    unSubmitters: absentee,
    studyId: 1,
    quizStatus: 'DONE',
  },
  {
    quizId: 33,
    quiz: '만료된 퀴즈 입니다 33',
    quizType: 'O_X',
    description: '설명입니다.',
    startedAt: '2022-12-07T21:00:00',
    endedAt: '2022-12-07T23:00:00',
    durationOfSecond: 7200,
    timestamp: '2022-12-11T23:55:13.751+09:00',
    creator,
    unSubmitters: absentee,
    studyId: 1,
    quizStatus: 'DONE',
  },
  {
    quizId: 22,
    quiz: '만료된 퀴즈 입니다 22',
    quizType: 'O_X',
    description: '설명입니다.',
    startedAt: '2022-12-07T21:00:00',
    endedAt: '2022-12-07T23:00:00',
    durationOfSecond: 7200,
    timestamp: '2022-12-11T23:55:13.751+09:00',
    creator,
    unSubmitters: absentee,
    studyId: 1,
    quizStatus: 'DONE',
  },
  {
    quizId: 11,
    quiz: '만료된 퀴즈 입니다 11',
    quizType: 'O_X',
    description: '설명입니다.',
    startedAt: '2022-12-07T21:00:00',
    endedAt: '2022-12-07T23:00:00',
    durationOfSecond: 7200,
    timestamp: '2022-12-11T23:55:13.751+09:00',
    creator,
    unSubmitters: absentee,
    studyId: 1,
    quizStatus: 'DONE',
  },
];

export const rankingList = [
  {
    rankingId: 31,
    rank: 1,
    score: 110,
    user: members[0],
  },
  {
    rankingId: 32,
    rank: 1,
    score: 110,
    user: members[1],
  },
  {
    rankingId: 33,
    rank: 1,
    score: 110,
    user: members[2],
  },
  {
    rankingId: 34,
    rank: 2,
    score: 105,
    user: members[3],
  },
  {
    rankingId: 35,
    rank: 3,
    score: 102,
    user: members[4],
  },
  {
    rankingId: 36,
    rank: 4,
    score: 53,
    user: members[5],
  },
  {
    rankingId: 37,
    rank: 4,
    score: 53,
    user: members[6],
  },
  {
    rankingId: 38,
    score: 0,
    user: members[7],
  },
] as RankResponse[];
