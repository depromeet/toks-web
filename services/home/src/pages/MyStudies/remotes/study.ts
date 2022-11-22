import axios from 'axios';
import { Study } from '../models/study';

// TODO: API 나온 후 삭제
const isTest = true;

const MOCK: Study[] = [
  {
    img: 'https://asset.tokstudy.com/ic_default_profile.png',
    title: '아키텍처 크리너스',
    tags: ['javascript', '설계', 'typescript', '시스템', '북스터디'],
    member: ['강현구', '강현구', '강현구', '강현구', '강현구'],
    id: 1,
  },
  {
    img: 'https://asset.tokstudy.com/ic_default_profile.png',
    title: '아키텍처 크리너스',
    tags: ['javascript', '설계', 'typescript', '시스템', '북스터디'],
    member: ['강현구', '강현구', '강현구', '강현구', '강현구'],
    id: 2,
  },
  {
    img: 'https://asset.tokstudy.com/ic_default_profile.png',
    title: '아키텍처 크리너스',
    tags: ['javascript', '설계', 'typescript', '시스템', '북스터디'],
    member: ['강현구', '강현구', '강현구', '강현구', '강현구'],
    id: 3,
  },
  {
    img: 'https://asset.tokstudy.com/ic_default_profile.png',
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
