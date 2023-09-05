import React from 'react';

import { Button } from '@/common';

interface CategoryButton {
  label: string;
  value: string;
}

interface CategoryButtonGroupsProps {
  buttons: CategoryButton[];
  selectedButtons: string[];
  onClick: (value: string) => void;
}

export const CategoryButtonGroups = ({
  buttons,
  onClick,
  selectedButtons,
}: CategoryButtonGroupsProps) => {
  return (
    <div className="px-20px py-24px">
      <div className="flex flex-wrap gap-[15px]">
        {buttons.map(({ value, label }) => {
          const isSelected = selectedButtons.includes(value);
          return (
            <Button
              className="w-[calc(50%-7.5px)] justify-start"
              size="L"
              textColor="gray10"
              backgroundColor={isSelected ? 'primaryDefault' : 'gray70'}
              onClick={() => {
                onClick(value);
              }}
              key={value}
            >
              {label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
