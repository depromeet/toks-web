import { isToksError } from '@depromeet/http';
import { PATHS } from '@depromeet/path';
import { getStudyDetail, useToast } from '@depromeet/toks-components';
import { usePathParam } from '@depromeet/utils';
import { useSuspendedQuery } from '@toss/react-query';
import { add, formatISO } from 'date-fns';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { postQuizCreate } from '../remotes/postQuizCreate';
import { QuizCreateForm } from '../types';

export const useQuizCreate = () => {
  const studyId = usePathParam('studyId', { suspense: true });
  const { data: study } = useSuspendedQuery(['study', studyId], () => getStudyDetail(Number(studyId)), {
    enabled: Boolean(studyId),
  });
  const { open } = useToast();
  const router = useRouter();

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
      await open({ title: '퀴즈가 생성되었습니다.', type: 'success', showOnNextPage: true });

      await router.push(PATHS.quiz.studyDetail({ studyId: id }));
    } catch (error: unknown) {
      if (isToksError(error)) {
        await open({ title: error.message, type: 'danger' });
      }
    }
  });

  return {
    createQuiz,
    studyRound: study && study.latestQuizRound + 1,
  };
};
