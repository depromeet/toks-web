import { BackHeader } from '@/common/components/BackHeader';

export default function BackHeaderLayout({
  children,
}: StrictPropsWithChildren) {
  return (
    <>
      <BackHeader />
      {children}
    </>
  );
}
