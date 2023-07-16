/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@/common/components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Common/Avatar',
  component: Avatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const 이미지없을때_아바타: Story = {
  args: {
    name: '김코딩',
  },
};

export const 기본_아바타: Story = {
  args: {
    src: 'https://source.unsplash.com/random/?programming',
    name: '김코딩',
  },
};

export const Small사이즈_아바타: Story = {
  args: {
    src: 'https://source.unsplash.com/random/?programming',
    name: '김코딩',
    size: 'S',
  },
};
