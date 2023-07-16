/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/common/components/Text';

const meta: Meta<typeof Text> = {
  title: 'Common/Text',
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const HEADING_L: Story = {
  args: {
    children: 'Heading L',
    typo: 'headingL',
    color: 'gray120',
  },
};

export const HEADING_M: Story = {
  args: {
    children: 'Heading M',
    typo: 'headingM',
    color: 'gray120',
  },
};

export const SUBHEADING_BOLD: Story = {
  args: {
    children: 'Subheading Bold',
    typo: 'subheadingBold',
    color: 'gray120',
  },
};

export const SUBHEADING: Story = {
  args: {
    children: 'Subheading',
    typo: 'subheading',
    color: 'gray120',
  },
};

export const BODY_BOLD: Story = {
  args: {
    children: 'Body Bold',
    typo: 'bodyBold',
    color: 'gray120',
  },
};

export const BODY: Story = {
  args: {
    children: 'Body',
    typo: 'body',
    color: 'gray120',
  },
};

export const CAPTION_BOLD: Story = {
  args: {
    children: 'Caption Bold',
    typo: 'captionBold',
    color: 'gray120',
  },
};

export const CAPTION: Story = {
  args: {
    children: 'Caption',
    typo: 'caption',
    color: 'gray120',
  },
};
