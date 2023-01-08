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
  STEP0: 'https://asset.tokstudy.com/progress-bar/img-progress-0.png',
  STEP1: 'https://asset.tokstudy.com/progress-bar/img-progress-1.png',
  STEP2: 'https://asset.tokstudy.com/progress-bar/img-progress-2.png',
  STEP3: 'https://asset.tokstudy.com/progress-bar/img-progress-3.png',
  STEP4: 'https://asset.tokstudy.com/progress-bar/img-progress-4.png',
  STEP5: 'https://asset.tokstudy.com/progress-bar/img-progress-5.png',
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
