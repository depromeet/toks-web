import { isToksError } from '@depromeet/http';
import { PATHS } from '@depromeet/path';
import { useToast } from '@depromeet/toks-components';
import { formatISO } from 'date-fns';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { CreateStudyFormValues } from '../components/CreateStudyForm/type';
import { DEFAULT_STUDY_CREATE_FORM } from '../constants';
import { postStudy } from '../remotes/study';

export const useCreateStudyForm = () => {
  const {
    register,
    control,
    getValues,
    handleSubmit,
    setValue,
    formState: { isValid, errors },
  } = useForm<CreateStudyFormValues>({ mode: 'onChange', defaultValues: DEFAULT_STUDY_CREATE_FORM });

  const router = useRouter();

  const { open } = useToast();

  const { mutate: createStudy } = useMutation(async () => {
    try {
      const values = getValues();

      const { startedAt, endedAt } = values;

      const formatStartedAt = formatISO(new Date(startedAt));
      const formatEndedAt = formatISO(new Date(endedAt));

      const { id } = await postStudy({
        ...values,
        startedAt: formatStartedAt,
        endedAt: formatEndedAt,
      });

      await router.push(PATHS.onboarding.createComplete({ studyId: id }));
      await open({ title: '스터디가 생성되었습니다.', type: 'success', showOnNextPage: true });
    } catch (error: unknown) {
      if (isToksError(error)) {
        await open({ title: error.message, type: 'danger' });
      }
    }
  });
  const isDisabled = !isValid;

  const isMaxLength = useCallback((maxLength: number) => {
    return {
      value: maxLength,
      message: `${maxLength}자 이내로 입력해주세요.`,
    };
  }, []);

  const isRequiredText = useCallback((text: string) => `${text}을 입력해주세요.`, []);

  return {
    register,
    createStudy,
    handleSubmit,
    setValue,
    errors,
    control,
    isDisabled,
    isMaxLength,
    isRequiredText,
    getValues,
  };
};
