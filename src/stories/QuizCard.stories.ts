/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';

import { QuizCard } from '@/common/components/QuizCard';

const meta: Meta<typeof QuizCard> = {
  title: 'Common/QuizCard',
  component: QuizCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuizCard>;

export const 기본사이즈_사진1개: Story = {
  args: {
    categoryTitle: '카테고리',
    quizDescription: 'Title Text Title Text Title Text Title Text',
    images: ['https://source.unsplash.com/random/?programming'],
    likeCount: 10,
    commentCount: 10,
  },
};

export const 기본사이즈_사진2개: Story = {
  args: {
    categoryTitle: '카테고리',
    quizDescription: 'Title Text Title Text Title Text Title Text',
    images: [
      'https://source.unsplash.com/random/?programming',
      'https://source.unsplash.com/random/daily',
    ],
    likeCount: 10,
    commentCount: 10,
  },
};

export const 기본사이즈_OX퀴즈: Story = {
  args: {
    categoryTitle: '카테고리',
    quizDescription: 'Title Text Title Text Title Text Title Text',
    likeCount: 10,
    commentCount: 10,
    quizType: 'ox',
  },
};

export const 캐러셀_사이즈_사진1개: Story = {
  args: {
    categoryTitle: '카테고리',
    quizDescription: 'Title Text Title Text Title Text Title Text',
    images: ['https://source.unsplash.com/random/?programming'],
    likeCount: 10,
    commentCount: 10,
    sizeType: 'small',
  },
};

export const 캐러셀_사이즈_OX퀴즈: Story = {
  args: {
    categoryTitle: '카테고리',
    quizDescription: 'Title Text Title Text Title Text Title Text',
    likeCount: 10,
    commentCount: 10,
    quizType: 'ox',
    sizeType: 'small',
  },
};
