import { Appbar } from './_components/Appbar';
import { CategoryBottomSheet } from './toks-main/_components/CategoryBottomSheet';

export default function Layout({ children }: StrictPropsWithChildren) {
  <>
    <Appbar />
    {children}
    <CategoryBottomSheet />
  </>;
}
