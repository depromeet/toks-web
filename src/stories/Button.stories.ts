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

export const TEXT_BUTTON_1: Story = {
  args: {
    size: 'S',
    textColor: 'gray10',
    children: 'Button',
    iconName: 'CHEVRON_DOWN',
  },
};

export const TEXT_BUTTON_2: Story = {
  args: {
    size: 'M',
    typo: 'subheading',
    textColor: 'primaryDefault',
    children: 'Button',
    iconName: 'CHEVRON_DOWN',
  },
};

export const PRIMARY_BUTTON_1: Story = {
  args: {
    size: 'S',
    typo: 'bodyBold',
    backgroundColor: 'primaryDefault',
    textColor: 'gray10',
    children: 'Button',
  },
};

export const PRIMARY_BUTTON_2: Story = {
  args: {
    size: 'L',
    typo: 'subheadingBold',
    backgroundColor: 'primaryDefault',
    textColor: 'gray10',
    children: 'Button',
    disabled: true,
  },
};

export const PRIMARY_BUTTON_3: Story = {
  args: {
    size: 'M',
    typo: 'subheadingBold',
    backgroundColor: 'primaryDefault',
    textColor: 'gray10',
    children: 'Button',
    className: 'w-full',
  },
};

export const GENERAL_BUTTON_1: Story = {
  args: {
    size: 'M',
    typo: 'subheadingBold',
    backgroundColor: 'gray20',
    textColor: 'gray110',
    children: 'Button',
    disabled: true,
  },
};

export const GENERAL_BUTTON_2: Story = {
  args: {
    size: 'L',
    typo: 'subheadingBold',
    backgroundColor: 'gray20',
    textColor: 'gray110',
    children: 'Button',
    iconName: 'EMOJI_NINJA',
    iconPosition: 'LEFT',
  },
};
