---
to: services/<%= name %>/mocks/handlers.ts
---
import { rest } from 'msw';

// 아래는 예시입니다. 지우고 자유롭게 만들어 사용해주세요.
export interface FriendResponse {
  data: {
    name: string;
    info: {
      brithday: string;
      mbti: string;
      blood: string;
      etc: string;
    };
  };
}

export const handlers = [
  // Handles a GET /user request
  rest.get<FriendResponse>('https://backend.dev/friends', (req, res, ctx) => {
 
    return res(
      ctx.status(200),
      ctx.json({
        name: 'x',
        info: {
          brithday: '0_월 __일',
          mbti: 'ISFP',
          blood: '_형',
          etc: '',
        },
      })
    );
  }),
];
