/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';

import { Appbar } from '@/common/components/Appbar';

const meta: Meta<typeof Appbar> = {
  title: 'Common/Appbar',
  component: Appbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Appbar>;

export const 기본_APP_BAR: Story = {};
