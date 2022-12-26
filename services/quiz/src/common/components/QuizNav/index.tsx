import { PATHS, pushTo } from '@depromeet/path';
import { Icon, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Flex } from '@toss/emotion-utils';

interface Props {
  mainTitle: string;
  subTitle?: string;
  studyId: string | number;
}
export function QuizNav({ mainTitle, subTitle, studyId }: Props) {
  const onClick = () => {
    pushTo(PATHS.quiz.studyDetail({ studyId }));
  };
  return (
    <Flex direction="column">
      <Flex css={{ marginLeft: '20px' }}>
        <Button>
          <Icon iconName="ic-back" height={35} onClick={onClick} />
        </Button>
        <Text variant="title03" css={{ marginLeft: '18px' }}>
          {mainTitle}
        </Text>
      </Flex>
      <Text variant="headline" color="gray060" css={{ marginLeft: '66px' }}>
        {subTitle}
      </Text>
    </Flex>
  );
}

const Button = styled.div`
  cursor: pointer;
  margin-top: 7px;
`;
