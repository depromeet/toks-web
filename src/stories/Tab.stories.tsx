'use client';

/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from '@/common';
import { useState } from 'react';

const meta: Meta<typeof Tab> = {
  title: 'Common/Tab',
  component: Tab,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const TabComponent: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <Tab
        onTabChange={setActiveIndex}
        activeIndex={activeIndex}
        tabs={['Tab 1', 'Tab 2', 'Tab 3']}
      />
    );
  },
};

export const TabComponentWithPages: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderTabContent = () => {
      switch (activeIndex) {
        case 0:
          return <div className="text-white">Tab 1</div>;
        case 1:
          return <div className="text-white">Tab 2</div>;
        default:
          return <div className="text-white">Tab 3</div>;
      }
    };

    return (
      <>
        <Tab
          onTabChange={setActiveIndex}
          activeIndex={activeIndex}
          tabs={['Tab 1', 'Tab 2', 'Tab 3']}
        />
        {renderTabContent()}
      </>
    );
  },
};
