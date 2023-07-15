/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { BottomSheet } from '@/common/components/BottomSheet';

const meta: Meta<typeof BottomSheet> = {
  title: 'Common/BottomSheet',
  component: BottomSheet,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const 기본_BottomSheet: Story = {
  render: () => {
    const [isShow, setIsShow] = useState(false);
    return (
      <>
        <button
          onClick={() => {
            console.log('test1');
            setIsShow(true);
          }}
        >
          show
        </button>
        <BottomSheet
          isShow={isShow}
          onClose={() => {
            console.log('test');
            setIsShow(false);
          }}
        >
          <div className="p-30px text-gray-10">테스트중입니다.</div>
        </BottomSheet>
      </>
    );
  },
};
