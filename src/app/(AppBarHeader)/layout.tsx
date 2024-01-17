import { Appbar } from './_components/Appbar';
import { CategoryBottomSheet } from './toks-main/_components/CategoryBottomSheet';

export default function AppBarLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      <Appbar />
      {children}
      {/* TODO: 에러 고치기 .. */}
      {/* <CategoryBottomSheet /> */}
    </>
  );
}
