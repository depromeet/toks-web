import { Text } from '@/common';

import { ButtonProps } from './type';

export function Button({
  icon,
  buttonType = 'primary',
  width,
  size = 'M',
  disabled,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest}>
      <Text>{children}</Text>
    </button>
  );
}

function GhostButton() {}

function ToggleButton() {}
