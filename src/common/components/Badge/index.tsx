import React from 'react';

import { Text } from '../Text';

export const Badge = ({ label }: { label: string }) => {
  return (
    <div className="inline-flex items-center justify-center rounded-[4px] bg-gray-110 px-[4px] py-[2px]">
      <Text typo="captionBold" color="white">
        {label}
      </Text>
    </div>
  );
};
