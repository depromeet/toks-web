import { http } from '@depromeet/http';

import { PostImageUploadResponse } from '../types';

export const postImageUpload = async (params: File[]) => {
  try {
    const imageUrls = await Promise.all(
      params.map(async file => {
        const formData = new FormData();
        formData.append('image', file);
        const { imageUrl } = await http.post<PostImageUploadResponse>('/api/v1/images', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        return imageUrl;
      })
    );
    return imageUrls;
  } catch (err) {
    return [];
  }
};
