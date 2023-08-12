import { PositionType } from '.';
import { Text } from '../Text';

export function TooltipContent({
  message,
  position,
}: {
  message: string;
  position: PositionType;
}) {
  return (
    <div
      style={{
        left: position.left,
        top: position.top,
      }}
      className="z-10000 absolute -ml-6px rounded-8px bg-gray-90 px-16px py-6px"
    >
      <Text typo="body" color="white">
        {message}
      </Text>
      <div
        className="absolute -top-10px left-40px 
     h-0 w-0
     border-x-5px border-b-10px
     border-x-transparent border-b-gray-90
      "
      />
    </div>
  );
}
