import { headers } from 'next/headers';
import Image from 'next/image';

import { ICON_URL, Text } from '@/common';

export const LogoutBar = () => {
  // const [isShow, setIsShow] = useState(false);
  const headersInstance = headers();
  const authorization = headersInstance.get('isLogin');
  console.log(authorization, 'hi', headersInstance);

  // const onClick = () => {
  //   // setIsShow(true)
  //   console.log(authorization);
  // };
  return (
    <div
      // onClick={onClick}
      className="flex h-full w-full items-center justify-between rounded-12px bg-gray-100 px-20px py-16px"
    >
      <Text typo="subheadingBold" color="gray10">
        로그아웃
      </Text>
      <Image
        src={ICON_URL.CHEVRON_RIGHT}
        alt="로그아웃 버튼"
        width={24}
        height={24}
      />
      {/* <BottomSheet onClose={() => setIsShow(false)} isShow={isShow}>
        <h1>hi</h1>
      </BottomSheet> */}
    </div>
  );
};
