/* eslint-disable storybook/prefer-pascal-case */
import { Input } from '@/common/components/Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Common/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const 기본_INPUT: Story = {
  args: {
    placeholder: 'Placeholder Text',
  },
};

export const ERROR_INPUT: Story = {
  args: {
    placeholder: 'Placeholder Text',
    errorMessage: 'Error Message',
  },
};

export const 라벨_INPUT: Story = {
  args: {
    label: 'Label Text',
    placeholder: 'Placeholder Text',
    name: 'label-input',
  },
};
