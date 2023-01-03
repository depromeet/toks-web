import { theme } from '@depromeet/theme';
import { Icon, Input, Text } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

const DynamicEditor = dynamic(
  async () => {
    const { Editor } = await import('@depromeet/toks-components');
    return Editor;
  },
  { ssr: false }
);

export interface QuizCreateEditorProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
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
        <DynamicEditor
          label="답안"
          onChange={data => {
            setValue('answer', data);
          }}
          required
        />
      </div>
    </Flex>
  );
};
