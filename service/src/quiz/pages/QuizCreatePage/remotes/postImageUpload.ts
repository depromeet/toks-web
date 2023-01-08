import { http } from '@depromeet/http';
import { PostImageUploadResponse } from '../types';

export const postImageUpload = async (params: File[]) => {
  const formData = new FormData();
  const imageUrls = [];

  for (let i = 0; i < params.length; i++) {
    await formData.append('image', params[i]);
    const { imageUrl } = await http.post<PostImageUploadResponse>('/api/v1/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    imageUrls.push(imageUrl);
  }

  return imageUrls;
};
