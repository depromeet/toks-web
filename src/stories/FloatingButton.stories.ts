/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';

import { FloatingButton } from '@/common/components/FloatingButton';

const meta: Meta<typeof FloatingButton> = {
  title: 'Common/FloatingButton',
  component: FloatingButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const 기본_FLOATING_BUTTON: Story = {};
