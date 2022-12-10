import { http } from '@depromeet/http';

export const getNickname = async () => {
  try {
    return await http.get('/api/v1/user/nickname');
  } catch (error) {
    console.log(error);
  }
};
