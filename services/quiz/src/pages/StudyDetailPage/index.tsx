import { Text, TimePicker } from '@depromeet/toks-components';

import { useForm } from "react-hook-form";
import QuizList from './components/QuizList';
import RankingList from './components/RankingList';
import StudyInfo from './components/StudyInfo';
import { StudyProgress } from './components/StudyProgress';
import { FlexRow, Page, QuizListWrapper, RankingListWrapper, Section } from './style';

export default function StudyDetailPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data : any) => console.log(data);

  return (
    <Page>
      <Section>
        <FlexRow>
          <StudyInfo />
          <StudyProgress />
        </FlexRow>
        <form onSubmit={handleSubmit(onSubmit)} css={{width: '340px'}}>
          <input defaultValue="test" {...register("example")} />
          <TimePicker {...register("timepicker")} />
          <input type="submit" />
        </form>
        <FlexRow css={{ marginTop: '80px' }}>
          <QuizListWrapper>
            <Text variant="title04" color="gray010">
              똑스
            </Text>
            <QuizList />
          </QuizListWrapper>
          <RankingListWrapper css={{ marginLeft: '35px' }}>
            <Text variant="title04" color="gray010">
              똑순위
            </Text>
            <RankingList />
          </RankingListWrapper>
        </FlexRow>
      </Section>
    </Page>
  );
}
