import { Button } from '@depromeet/toks-components';
import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { QuizReply, useSetClientQuizReply } from 'pages/QuizVotingPage/hooks/quizReplyList';

type VoteButtonProps = {
  peerAnswers: QuizReply[];
  quizReplyHistoryId: number;
};

export function VoteButton({ peerAnswers, quizReplyHistoryId }: VoteButtonProps) {
  const setQuizAplyLists = useSetClientQuizReply();

  const onClick = (quizReplyHistoryId: number) => {
    setQuizAplyLists(peerAnswers.find(answer => quizReplyHistoryId === answer?.quizReplyHistoryId));
  };

  const { data: ans } = useQuery<QuizReply>(QUERY_KEYS.GET_QUIZREPLY, {
    initialData: null,
    staleTime: Infinity,
  });

  if (quizReplyHistoryId === ans?.quizReplyHistoryId) {
    return (
      <Button
        css={{ float: 'right' }}
        width={110}
        size="medium"
        type="primary"
        onClick={() => onClick(quizReplyHistoryId)}
      >
        똑표하기
      </Button>
    );
  } else {
    return (
      <Button
        css={{ float: 'right' }}
        width={110}
        size="medium"
        type="general"
        onClick={() => onClick(quizReplyHistoryId)}
      >
        똑표하기
      </Button>
    );
  }
}
