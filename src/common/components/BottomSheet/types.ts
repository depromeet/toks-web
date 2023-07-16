import { PureModalProps } from '../PurePortal/types';

export type BottomSheetProps = PureModalProps & {
  onClose: VoidFunction;
};
