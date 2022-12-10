import { http } from '@depromeet/http';

interface User {
  email: string;
  nickname: string;
  thumbnailImageUrl: string;
  profileImageUrl: string;
}

export async function getUser() {
  // TODO: API 나온 후 삭제
  const isTest = true;

  if (isTest) {
    return new Promise<User>(res =>
      setTimeout(
        () =>
          res({
            email: 'kanghg1116@naver.com',
            nickname: '강현구',
            thumbnailImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
            profileImageUrl: 'https://asset.tokstudy.com/img_penguin.png',
          }),
        1000
      )
    );
  }

  return await http.get<User>('/api/v1/user');
}

getUser.queryKey = ['getUser'];
