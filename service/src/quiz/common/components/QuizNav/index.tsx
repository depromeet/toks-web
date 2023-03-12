import { PATHS } from '@depromeet/path';
import { Icon, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Flex, margin } from '@toss/emotion-utils';
import Link from 'next/link';

interface Props {
  mainTitle: string;
  subTitle?: string;
  studyId: string | number;
}
export function QuizNav({ mainTitle, subTitle, studyId }: Props) {
  return (
    <Flex direction="column">
      <Flex css={margin.top(18)}>
        <Link href={PATHS.quiz.studyDetail({ studyId })} passHref prefetch>
          <a>
            <IconButton iconName="ic-back" height={35} role="a" />
          </a>
        </Link>

        <Text variant="title03" css={{ marginLeft: '18px' }}>
          {mainTitle}
        </Text>
      </Flex>
      <Text variant="headline" color="gray060" css={{ marginLeft: '46px' }}>
        {subTitle}
      </Text>
    </Flex>
  );
}

const IconButton = styled(Icon)`
  cursor: pointer;
  margin-top: 6px;
`;
