import { isToksError } from '@depromeet/http';
import { PATHS } from '@depromeet/path';
import { getStudyDetail, useToast } from '@depromeet/toks-components';
import { usePathParam } from '@depromeet/utils';
import { useSuspendedQuery } from '@toss/react-query';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { postImageUpload } from '../remotes/postImageUpload';
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
      const formatStartedAt = format(new Date(values.startedAt), 'yyyy-MM-dd').concat(`T${values.timepicker}+09:00`);

      if (!study) {
        return;
      }

      if (values.imageFiles) {
        const imageUrls = await postImageUpload(values.imageFiles);
        values.imageUrls = imageUrls;
      }

      const { studyId: createStudyId } = await postQuizCreate({
        ...values,
        quizType: 'MARK_DOWN',
        studyId: Number(studyId),
        startedAt: formatStartedAt,
        round: study.latestQuizRound + 1,
      });

      await open({ title: '퀴즈가 생성되었습니다.', type: 'success' });
      await router.push(PATHS.quiz.studyDetail({ studyId: createStudyId }));
    } catch (error: unknown) {
      if (isToksError(error)) {
        router.replace(PATHS.quiz.studyDetail({ studyId: studyId }));
        await open({ title: error.message, type: 'danger' });
      }
    }
  });

  return {
    createQuiz,
    studyRound: study && study.latestQuizRound + 1,
  };
};
