import { instance } from '@depromeet/http';

export const getNickname = async () => {
  try {
    const { data } = await instance.get('/api/v1/user/nickname');
    return data;
  } catch (error) {
    console.log(error);
  }
};
