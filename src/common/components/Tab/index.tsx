'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { TabProps } from './types';
import { Text } from '../Text';

export const Tab = ({ tabs, activeIndex, onTabChange }: TabProps) => {
  const childRef = useRef(new Map());
  const tabListRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState({
    hasValue: false,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const target = childRef.current.get(activeIndex);
    const container = tabListRef.current;

    if (target) {
      const containerRect = container?.getBoundingClientRect();

      if (!containerRect || containerRect.width === 0) {
        return;
      }

      const targetRect = target.getBoundingClientRect();
      const left = targetRect.left - containerRect.left;
      const right = containerRect.right - targetRect.right;

      setSliderPosition({
        hasValue: true,
        left: left + 4,
        right: right + 4,
      });
    }
  }, [activeIndex]);

  return (
    <div className="overflow-y-hidden border-b-1px border-solid border-gray-90 shadow-none">
      <div className="relative z-0 flex overflow-x-auto" ref={tabListRef}>
        {tabs.map((tab, index) => {
          const isSelected = activeIndex === index;
          return (
            <motion.button
              key={index}
              onClick={() => {
                onTabChange(index);
              }}
              className={clsx(
                'flex h-40px flex-1 items-center justify-center',
                {
                  'text-primary-default': isSelected,
                }
              )}
              ref={(ref) => childRef.current.set(index, ref)}
            >
              <Text typo={isSelected ? 'bodyBold' : 'body'} color="white">
                {tab}
              </Text>
            </motion.button>
          );
        })}
        {sliderPosition.hasValue && (
          <motion.div
            animate={{
              left: sliderPosition.left,
              right: sliderPosition.right,
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 z-10 mx-2px h-2px bg-primary-default"
            initial={false}
          />
        )}
      </div>
    </div>
  );
};
