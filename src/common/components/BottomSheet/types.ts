import { ClassNameValue } from 'tailwind-merge';

export interface BottomSheetProps {
  isShow: boolean;
  className?: ClassNameValue;
  onClose: VoidFunction;
}
