import Image from 'next/image';
import React from 'react';

import { ICON_URL } from '@/common/constants';

import { Text } from '../Text';

type CategoriesProps = {
  categories: Array<{
    categoryName: string;
    isSelected: boolean;
  }>;
  onClick: VoidFunction;
};

export const Categories = ({ categories, onClick }: CategoriesProps) => {
  if (categories.length === 0) {
    return null;
  }

  return (
    <div
      className="flex items-center  rounded-[12px] bg-gray-110 px-[14px] py-[10px]"
      role="button"
      onClick={onClick}
    >
      <div className="flex items-center gap-[36px]">
        {categories.map(({ categoryName, isSelected }) => (
          <Text
            typo="captionBold"
            color={isSelected ? 'primaryDefault' : 'white'}
            key={categoryName}
            className="relative after:absolute after:right-[-18px] after:top-[1px] after:z-10 after:inline-block after:h-[12px] after:w-[1px] after:bg-white after:opacity-20 after:content-[''] last-of-type:after:hidden"
          >
            {categoryName}
          </Text>
        ))}
      </div>
      <button type="button" className="ml-auto h-fit">
        <Image
          src={ICON_URL.CHEVRON_DOWN}
          alt="카테고리 더보기"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};
