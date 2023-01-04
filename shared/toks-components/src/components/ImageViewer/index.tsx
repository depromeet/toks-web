import styled from '@emotion/styled';
import { ComponentProps, useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

interface Props extends ComponentProps<typeof Lightbox> {
  photos: Array<{ src: string }>;
}

export function ImageViewer({ photos }: Props) {
  const [index, setIndex] = useState(-1);
  // photoAlbum 고정 사이즈
  const photoAlbumSize = 188;

  const albumPhotos = photos.map(photo => ({
    src: photo.src,
    width: photoAlbumSize,
    height: photoAlbumSize,
    key: photo.src,
  }));

  return (
    <PhotoAlbumWrapper>
      <PhotoAlbum layout="rows" photos={albumPhotos} onClick={({ index }) => setIndex(index)} />
      <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={photos} />
    </PhotoAlbumWrapper>
  );
}

const PhotoAlbumWrapper = styled.div`
  .react-photo-album--photo {
    width: 188px !important;
    border-radius: 8px;
    object-fit: cover !important;
    :first-of-type {
      margin-left: 0px;
    }
    margin-left: 16px;
  }
  .react-photo-album--row {
    justify-content: flex-start !important;
  }
`;
