import { ToksError } from '@depromeet/http';
import { StudyResponse } from '@depromeet/toks-components';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { CreateStudyFormValues } from '../components/CreateStudyForm/type';
import { postStudy } from '../remotes/study';

export const useCreateStudyForm = () => {
  const {
    register,
    control,
    getValues,
    handleSubmit,
    setValue,
    formState: { isDirty, isValid, errors },
  } = useForm<CreateStudyFormValues>({ mode: 'onChange' });

  const router = useRouter();

  const { mutate: createStudy } = useMutation(async () => {
    const values = getValues();
    const { id } = await postStudy(values);
    alert('스터디가 생성되었습니다.');
    await router.replace(`/create-complete/${id}`);
  });

  const isDisabled = !isDirty || !isValid;

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
  };
};
