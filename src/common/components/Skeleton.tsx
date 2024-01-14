import { ClassNameValue, twMerge } from 'tailwind-merge';

type Props = {
  className?: ClassNameValue;
};

export const Skeleton = ({ className }: Props) => {
  return (
    <div
      className={twMerge('h-[20px] w-full rounded-[8px] bg-gray-90', className)}
    />
  );
};
