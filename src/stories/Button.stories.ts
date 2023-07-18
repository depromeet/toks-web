/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/common';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PRIMARY_BUTTON_1: Story = {
  args: {
    buttonType: 'primary',
    size: 'S',
    children: 'Button',
  },
};

export const PRIMARY_BUTTON_2: Story = {
  args: {
    buttonType: 'primary',
    size: 'L',
    children: 'Button',
    disabled: true,
  },
};

export const PRIMARY_BUTTON_3: Story = {
  args: {
    buttonType: 'primary',
    size: 'M',
    children: 'Button',
    className: 'w-300px',
  },
};

export const GENERAL_BUTTON_1: Story = {
  args: {
    buttonType: 'general',
    size: 'M',
    children: 'Button',
    disabled: true,
  },
};

export const GENERAL_BUTTON_2: Story = {
  args: {
    buttonType: 'general',
    size: 'L',
    children: 'Button',
    iconName: 'EMOJI_NINJA',
  },
};
