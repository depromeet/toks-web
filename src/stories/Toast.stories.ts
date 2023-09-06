/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from '@/common/components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Common/Toast',
  component: Toast,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const SUCCESS_TOAST: Story = {
  args: {
    isShow: true,
    direction: 'top',
    type: 'success',
    title: '닉네임 설정에 성공했습니다. ',
  },
};

export const FAILED_TOAST: Story = {
  args: {
    isShow: true,
    direction: 'top',
    type: 'failed',
    title: '닉네임 설정에 실패했습니다. ',
  },
};
