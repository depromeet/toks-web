/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';

import { GhostButton } from '@/common';

const meta: Meta<typeof GhostButton> = {
  title: 'Common/GhostButton',
  component: GhostButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GhostButton>;

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
    size: 'M',
    children: 'Button',
    iconName: 'EMOJI_NINJA',
  },
};

export const GENERAL_BUTTON_1: Story = {
  args: {
    buttonType: 'general',
    size: 'S',
    children: 'Button',
  },
};

export const GENERAL_BUTTON_2: Story = {
  args: {
    buttonType: 'general',
    size: 'M',
    children: 'Button',
  },
};
