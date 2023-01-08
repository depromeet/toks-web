import { FULL_HEIGHT, getStudyDetail } from '@depromeet/toks-components';
import { usePathParam } from '@depromeet/utils';
import { Flex } from '@toss/emotion-utils';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import { QuizNav } from 'quiz/common/components/QuizNav';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';

import { QuizCreateEditor } from './components/QuizCreateEditor';
import { QuizCreateInputList } from './components/QuizCreateInputList';
import { useQuizCreate } from './hooks/useQuizCreate';
import { QuizCreateForm } from './types';

const QuizCreatePage = () => {
  const { register, setValue, control, getValues, setError } = useForm();
  const { createQuiz } = useQuizCreate();
  const studyId = usePathParam('studyId', { suspense: true });

  const { data: studyInfo } = useQuery(QUERY_KEYS.GET_STUDY_INFO(studyId), () => getStudyDetail(studyId));
  if (!studyInfo) {
    return null;
  }

  return (
    <>
      <QuizNav
        mainTitle={`${studyInfo.latestQuizRound + 1}회차 똑스 만들기`}
        studyId={studyId}
        subTitle={`${studyInfo.name}`}
      />
      <Flex.Center css={{ height: FULL_HEIGHT }}>
        <form
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            const values = getValues() as QuizCreateForm;

            if (!values.answer) {
              setError('answer', {
                type: 'required',
                message: '답을 입력해주세요',
              });
              return;
            }

            createQuiz(values);
          }}
        >
          <Flex
            css={{
              gap: '48px',
            }}
          >
            <QuizCreateEditor register={register} setValue={setValue} />
            <QuizCreateInputList register={register} setValue={setValue} control={control} />
          </Flex>
        </form>
      </Flex.Center>
    </>
  );
};

export default QuizCreatePage;
