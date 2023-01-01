import { Button, Calendar, DropDown, TimePicker, Upload } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';

export const QuizCreateInputList = () => {
  return (
    <Flex
      direction="column"
      css={{
        width: '340px',
        gap: '24px',
      }}
    >
      <DropDown
        label="제한 시간"
        options={[
          { label: '1시간', value: 60 },
          { label: '1시간 30분', value: 90 },
          { label: '2시간', value: 120 },
          { label: '2시간 30분', value: 180 },
          { label: '3시간', value: 240 },
        ]}
        required
      />
      <Calendar label="똑스 공개 날짜" dateFormat="mm/dd/yy" minDate={new Date()} required />
      <TimePicker label="똑스 공개 시간" required />
      <Upload name="imageFiles" height={160} labelText="추가하기" required />
      <Flex
        css={{
          gap: '24px',
        }}
      >
        <Button type="ghost">다시 만들기</Button>
        <Button>똑스 만들기 완료</Button>
      </Flex>
    </Flex>
  );
};
