import { Image, Text } from '@depromeet/toks-components';
import { format } from 'date-fns';
import { HTMLAttributes } from 'react';

import { ProgressStep } from 'quiz/pages/StudyDetailPage/models/studyInfo';

import { FlexRow, Frame } from './style';

interface StudyProgressProps extends HTMLAttributes<HTMLDivElement> {
  progress: ProgressStep;
  startedAt: string;
  endedAt: string;
}

const PROGRESS_IMG_BY_STEP = {
  STEP0: 'https://blog.kakaocdn.net/dn/Yn8Ku/btrga1XCqZI/Qm9VZpwNw1k1HqqE6p5fL0/img.jpg',
  STEP1:
    'https://w.namu.la/s/5d951eed3bab16703e2ff271c370df13d7508b51a7fe4db7e3d2a87ae56e1328185bce27b70f3b7f8559f43cc8bedec51020c40307f8d696da921d9e75de53e01fd37289327397a1444a27db1d80d187',
  STEP2: 'https://mblogthumb-phinf.pstatic.net/20130807_127/dlscjsqlsdl_1375853484362rxzgS_JPEG/yellow.jpg?type=w2',
  STEP3:
    'https://media.istockphoto.com/id/1160620218/photo/beautiful-nature-background-from-green-leaves-with-detailed-texture-greenery-top-view-closeup.jpg?s=612x612&w=0&k=20&c=hiwAxq9f9WD7dEw8SCckV6CJg0RHvqRo4mgbHA_g9Qo=',
  STEP4:
    'https://mblogthumb-phinf.pstatic.net/20160518_142/sooheeyoon_1463551725833ii4hv_JPEG/IMG_20160518_1.jpg?type=w800',
  STEP5:
    'https://mblogthumb-phinf.pstatic.net/MjAxNzA5MDRfMjYw/MDAxNTA0NTE0MjkyNjc3.0uFSATM11oD5o3GiaSYrinbl7TVHiZbK7iGwerqtygsg.EWVKNa4HynWuNzZoOKiaH4tUeb4YYClTmeC22vv3ejEg.JPEG.kdauuy/qhfktor4.jpg?type=w2',
};

export function StudyProgress({ progress, startedAt, endedAt }: StudyProgressProps) {
  const [startDate, endDate] = [new Date(startedAt), new Date(endedAt)];
  const dateFormat = 'yyyy.MM.dd';

  return (
    <Frame>
      <FlexRow css={{ position: 'absolute', top: '10px', left: '15px' }}>
        <Text variant="body03" css={{ opacity: '0.8' }}>
          Start
        </Text>
        <Text variant="body03" css={{ marginLeft: '4px' }}>
          {format(startDate, dateFormat)}
        </Text>
        <Text variant="body03" css={{ opacity: '0.8', marginLeft: '12px' }}>
          Finish
        </Text>
        <Text variant="body03" css={{ marginLeft: '4px' }}>
          {format(endDate, dateFormat)}
        </Text>
      </FlexRow>
      <Image src={PROGRESS_IMG_BY_STEP[progress]} alt="스터디 진행 이미지 입니다." />
    </Frame>
  );
}
