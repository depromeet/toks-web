import React from 'react';

import { cn } from '@/common';
import { Button } from '@/common/components/Button';
import { Text } from '@/common/components/Text';

interface CategoryButton {
  label: string;
  value: string;
}

interface CategoryButtonGroupsProps {
  buttons: CategoryButton[];
  selectedButtons: string[];
  onClick: (value: string) => void;
  className?: string;
}

export const CategoryButtonGroups = ({
  buttons,
  onClick,
  selectedButtons,
  className,
}: CategoryButtonGroupsProps) => {
  return (
    <div className={cn('px-20px py-24px', className)}>
      <div className="flex flex-wrap gap-[15px]">
        {buttons.length > 0 ? (
          buttons.map(({ value, label }) => {
            const isSelected = selectedButtons.includes(value);
            return (
              <Button
                className="w-[calc(50%-7.5px)] justify-start"
                size="L"
                textColor="gray10"
                typo="bodyBold"
                backgroundColor={isSelected ? 'primaryDefault' : 'gray70'}
                onClick={() => {
                  onClick(value);
                }}
                key={value}
              >
                {label}
              </Button>
            );
          })
        ) : (
          <Text typo="bodyBold" color="gray40">
            카테고리가 없습니다.
          </Text>
        )}
      </div>
    </div>
  );
};
