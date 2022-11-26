import axios from 'axios';

import { Study } from '../models/study';

// TODO: API 나온 후 삭제
const isTest = true;

const MOCK: Study[] = [
  {
    title: '아키텍처 크리너스\n아키텍처 크리너스',
    tags: ['javascript 가나다라마바사', '설계', 'typescript', '시스템', '북스터디'],
    member: ['강현구', '강현구', '강현구', '강현구', '강현구'],
    id: 1,
  },
  {
    title: '아키텍처 크리너스',
    tags: ['javascript', '설계', 'typescript', '시스템', '북스터디'],
    member: ['강현구', '강현구', '강현구', '강현구', '강현구'],
    id: 2,
  },
  {
    title: '아키텍처 크리너스',
    tags: ['javascript', '설계', 'typescript', '시스템', '북스터디'],
    member: ['강현구', '강현구', '강현구', '강현구', '강현구'],
    id: 3,
  },
  {
    title: '아키텍처 크리너스',
    tags: ['javascript', '설계', 'typescript', '시스템', '북스터디'],
    member: ['강현구', '강현구', '강현구', '강현구', '강현구'],
    id: 4,
  },
];

export async function getMyStudies() {
  if (isTest) {
    return await new Promise<Study[]>(res => setTimeout(() => res(MOCK), 1000));
  }

  const { data } = await axios.get<Study[]>('/api/my-studies');
  return data;
}

const NEW_QUIZ_MOCK: { [key: number]: boolean } = {
  1: false,
  2: false,
  3: true,
  4: false,
};

export async function getHasNewQuiz({ studyId }: { studyId: number }) {
  if (isTest) {
    return await new Promise<{ hasNewQuiz: boolean }>(res =>
      setTimeout(() => res({ hasNewQuiz: NEW_QUIZ_MOCK[studyId] ?? false }), 1000)
    );
  }

  const { data } = await axios.get<{ hasNewQuiz: boolean }>(`/api/${studyId}/new-quiz`);
  return data;
}
