import { theme } from '@depromeet/theme';
import { Input, Text, Icon } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicEditor = dynamic(
  async () => {
    const { Editor } = await import('@depromeet/toks-components');
    return Editor;
  },
  { ssr: false }
);

export const QuizCreateEditor = () => {
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
      <Input label="문제" placeholder="퀴즈 문제를 입력하세요" required />
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
          required
          onChange={data => {
            console.log(data);
          }}
        />
      </div>
    </Flex>
  );
};
