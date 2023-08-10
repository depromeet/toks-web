/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '@/common/components/Tooltip';
import { Text } from '@/common/components/Text';

const meta: Meta<typeof Tooltip> = {
  title: 'Common/Tooltip',
  component: Tooltip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const 기본_Tooltip: Story = {
  render: () => {
    return (
      <Tooltip message="관심있는 카테고리" isVisibleTooltip={true}>
        <Text typo="headingL" color="success">
          Tooltip
        </Text>
      </Tooltip>
    );
  },
};
