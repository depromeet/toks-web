import { theme } from '@depromeet/theme';
import { Icon, Input, SSRSuspense, Text } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Flex } from '@toss/emotion-utils';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { QuizCreateForm } from '../../types';

const DynamicEditor = dynamic(
  async () => {
    const { Editor } = await import('@depromeet/toks-components');
    return Editor;
  },
  { ssr: false }
);

interface QuizCreateEditorProps {
  register: UseFormRegister<QuizCreateForm>;
  setValue: UseFormSetValue<QuizCreateForm>;
}

export const QuizCreateEditor = ({ register, setValue }: QuizCreateEditorProps) => {
  const [isAddDescription, setIsAddDescription] = useState(false);

  return (
    <Flex
      css={{
        gap: '24px',
        flex: 1,
        padding: '32px',
        backgroundColor: `${theme.colors.gray110}`,
        borderRadius: '16px',
      }}
      direction="column"
    >
      <Input
        label="문제"
        placeholder="퀴즈 문제를 입력하세요"
        {...register('question', {
          required: '문제를 입력해주세요',
        })}
        required
      />
      <Flex justify="flex-end">
        {isAddDescription ? (
          <Input
            label="문제 추가 설명"
            suffix={
              <Icon
                iconName="ic-delete"
                role="button"
                onClick={() => setIsAddDescription(false)}
                style={{
                  cursor: 'pointer',
                }}
              />
            }
            {...register('description')}
          />
        ) : (
          <button type="button" css={{ textAlign: 'right' }}>
            <Text
              variant="body02"
              color="primary"
              role="button"
              onClick={() => setIsAddDescription(true)}
              style={{
                cursor: 'pointer',
              }}
            >
              +설명 추가하기
            </Text>
          </button>
        )}
      </Flex>
      <div css={{ height: '100%' }}>
        <SSRSuspense fallback={<Skeleton />}>
          <DynamicEditor
            label="답안"
            onChange={data => {
              setValue('answer', data);
            }}
            required
          />
        </SSRSuspense>
      </div>
    </Flex>
  );
};

const Skeleton = styled.div`
  width: 416px;
  height: 330px;

  &:after {
    content: '.';
    visibility: hidden;
  }
`;
