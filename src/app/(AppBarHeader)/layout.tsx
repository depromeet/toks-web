import { Appbar } from './_components/Appbar';

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
