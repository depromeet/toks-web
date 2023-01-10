import { getStudyDetail } from '@depromeet/toks-components';
import { usePathParam } from '@depromeet/utils';
import { Flex, Spacing, height100, width100 } from '@toss/emotion-utils';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import { QuizNav } from 'quiz/common/components/QuizNav';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';

import { QuizCreateEditor } from './components/QuizCreateEditor';
import { QuizCreateInputList } from './components/QuizCreateInputList';
import { DEFAULT_QUIZ_FORM_VALUE } from './constants';
import { useQuizCreate } from './hooks/useQuizCreate';
import { QuizCreateForm } from './types';

const QuizCreatePage = () => {
  const { register, setValue, control, getValues, setError } = useForm<QuizCreateForm>({
    defaultValues: DEFAULT_QUIZ_FORM_VALUE,
  });
  const { createQuiz } = useQuizCreate();
  const studyId = usePathParam('studyId', { suspense: true });

  const { data: studyInfo } = useQuery(QUERY_KEYS.GET_STUDY_INFO(studyId), () => getStudyDetail(studyId));
  if (!studyInfo) {
    return null;
  }

  return (
    <Flex css={{ height: FULL_HEIGHT }} direction="column">
      <QuizNav
        mainTitle={`${studyInfo.latestQuizRound + 1}회차 똑스 만들기`}
        studyId={studyId}
        subTitle={`${studyInfo.name}`}
      />
      <Spacing size={100} />
      <Flex.Center css={[height100, width100]}>
        <form
          css={{
            width: '100%',
          }}
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            const values = getValues();

            if (!values.answer) {
              setError('answer', {
                type: 'required',
                message: '답을 입력해주세요',
              });
              return;
            }

            createQuiz(values);
          }}
          css={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <QuizCreateEditor register={register} setValue={setValue} css={{ width: '70.7%', marginRight: '3.5%' }} />
          <QuizCreateInputList
            register={register}
            setValue={setValue}
            control={control}
            endedAt={studyInfo.endedAt}
            css={{ width: '25.8%' }}
          />
        </form>
      </Flex.Center>
    </Flex>
  );
};

export default QuizCreatePage;
