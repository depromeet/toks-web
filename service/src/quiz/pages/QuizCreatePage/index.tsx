import { FULL_HEIGHT } from '@depromeet/toks-components';
import { useQueryParam } from '@depromeet/utils';
import { Flex } from '@toss/emotion-utils';
import { QuizNav } from 'quiz/common/components/QuizNav';
import React from 'react';
import { useForm } from 'react-hook-form';

import { QuizCreateEditor } from './components/QuizCreateEditor';
import { QuizCreateInputList } from './components/QuizCreateInputList';
import { useQuizCreate } from './hooks/useQuizCreate';
import { QuizCreateForm } from './types';

const QuizCreatePage = () => {
  const { register, setValue, control, getValues, setError } = useForm();
  const { createQuiz } = useQuizCreate();
  const studyId = useQueryParam('studyId', { suspense: true });
  if (!studyId) {
    return null;
  }

  return (
    <>
      <QuizNav mainTitle={''} studyId={studyId} />
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
