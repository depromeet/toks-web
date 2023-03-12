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
    watch,
    formState: { errors },
  } = useForm<CreateStudyFormValues>({ mode: 'onChange', defaultValues: DEFAULT_STUDY_CREATE_FORM });

  const router = useRouter();

  const { open } = useToast();

  const { mutate: createStudy, isLoading: isPostLoading } = useMutation(async () => {
    const values = getValues();
    const { startedAt, endedAt } = values;

    try {
      const formatStartedAt = formatISO(new Date(startedAt));
      const formatEndedAt = formatISO(new Date(endedAt));

      const { id } = await postStudy({
        ...values,
        startedAt: formatStartedAt,
        endedAt: formatEndedAt,
      });
      await open({ title: '스터디가 생성되었습니다.', type: 'success', time: 2000 });

      await router.push(PATHS.onboarding.createComplete({ studyId: id }));
    } catch (error: unknown) {
      if (isToksError(error)) {
        await open({ title: error.message, type: 'danger' });
      }
    }
  });
  const { startedAt, endedAt } = getValues();
  const isValid =
    !watch(['name', 'startedAt', 'endedAt']).includes('') &&
    new Date(endedAt).getTime() > new Date(startedAt).getTime() &&
    watch('capacity') !== '';

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
    isValid,
    isMaxLength,
    isRequiredText,
    getValues,
    isPostLoading,
  };
};
