import { FULL_HEIGHT, getStudyDetail, useToast } from '@depromeet/toks-components';
import { usePathParam } from '@depromeet/utils';
import { Flex, Spacing, height100, width100 } from '@toss/emotion-utils';
import { format, isBefore, isToday, parseISO } from 'date-fns';
import React, { ComponentProps, useRef } from 'react';
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
  const { register, setValue, control, getValues, setError, reset, watch } = useForm<QuizCreateForm>({
    defaultValues: DEFAULT_QUIZ_FORM_VALUE,
  });

  const { createQuiz } = useQuizCreate();
  const studyId = usePathParam('studyId', { suspense: true });
  const editorRef: ComponentProps<typeof QuizCreateEditor>['ref'] = useRef(null);
  const { open } = useToast();

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
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            position: 'relative',
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

            if (isToday(new Date(values.startedAt))) {
              if (values.timepicker != null) {
                const settingDate = parseISO(
                  format(new Date(), "yyyy-MM-dd'T'00:00:00").replace('00:00:00', values.timepicker)
                );

                if (isBefore(settingDate, new Date())) {
                  open({ title: '퀴즈 시작 시간은 현재보다 빠를 수 없어요.', type: 'danger' });
                  return;
                }
              }
            }

            createQuiz(values);
          }}
        >
          <QuizCreateEditor
            ref={editorRef}
            register={register}
            setValue={setValue}
            css={{ width: '70.7%', marginRight: '3.5%' }}
          />
          <QuizCreateInputList
            reset={() => {
              reset(DEFAULT_QUIZ_FORM_VALUE);
              editorRef.current?.getInstance().reset();
            }}
            register={register}
            setValue={setValue}
            watch={watch}
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
