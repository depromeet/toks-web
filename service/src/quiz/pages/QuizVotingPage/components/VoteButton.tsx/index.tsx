import { Button } from '@depromeet/toks-components';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { EachQuizReplyByResponse } from 'quiz/common/models/quizReply';

import { votedAnswer } from '../../store/votedAnswer';

type VoteButtonProps = {
  peerAnswers: EachQuizReplyByResponse[];
  quizReplyHistoryId: number;
};

export function VoteButton({ peerAnswers, quizReplyHistoryId }: VoteButtonProps) {
  const setVotedAnswer = useSetRecoilState(votedAnswer);
  const votedAns = useRecoilValue(votedAnswer);

  const onClick = (quizReplyHistoryId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const selectedAnswer = peerAnswers.find(answer => quizReplyHistoryId === answer.quizReplyHistoryId);
    selectedAnswer ? setVotedAnswer(selectedAnswer) : setVotedAnswer(null);
  };

  if (quizReplyHistoryId === votedAns?.quizReplyHistoryId) {
    return (
      <Button
        css={{ float: 'right' }}
        width={110}
        size="medium"
        type="primary"
        onClick={(event: React.MouseEvent) => onClick(quizReplyHistoryId, event)}
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
        onClick={(event: React.MouseEvent) => onClick(quizReplyHistoryId, event)}
      >
        똑표하기
      </Button>
    );
  }
}
