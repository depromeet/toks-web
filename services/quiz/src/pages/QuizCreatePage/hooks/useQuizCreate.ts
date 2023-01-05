import { isToksError } from '@depromeet/http';
import { PATHS, pushTo } from '@depromeet/path';
import { getStudyDetail } from '@depromeet/toks-components';
import { useSuspendedQuery } from '@toss/react-query';
import { add, formatISO } from 'date-fns';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { postQuizCreate } from '../remotes/postQuizCreate';
import { QuizCreateForm } from '../types';

export const useQuizCreate = () => {
  const {
    query: { studyId },
  } = useRouter();
  const { data: study } = useSuspendedQuery(['study', studyId], () => getStudyDetail(Number(studyId)), {
    enabled: Boolean(studyId),
  });

  const { mutate: createQuiz } = useMutation(async (values: QuizCreateForm) => {
    try {
      const [hour, minute, second] = values.timepicker.split(':');
      const formatStartedAt = formatISO(
        add(new Date(values.startedAt), {
          hours: Number(hour),
          minutes: Number(minute),
          seconds: Number(second),
        })
      );

      if (!study) {
        return;
      }

      const { id } = await postQuizCreate({
        ...values,
        quizType: 'MARK_DOWN',
        studyId: Number(studyId),
        startedAt: formatStartedAt,
        round: study.latestQuizRound + 1,
      });
      alert('퀴즈가 생성되었습니다.');
      await pushTo(PATHS.quiz.studyDetail({ studyId: id }));
    } catch (error: unknown) {
      if (isToksError(error)) {
        alert(error.message);
      }
    }
  });

  return {
    createQuiz,
    studyRound: study && study.latestQuizRound + 1,
  };
};
