import { QuizCard } from '@/common/components/QuizCard';

function ToksMainPage() {
  return (
    <div>
      <div className="flex flex-col gap-8px">
        <QuizCard
          categoryTitle="카테고리"
          quizDescription="Title Text Title Text Title Text Title Text"
          images={[
            'https://source.unsplash.com/random/?programming',
            'https://source.unsplash.com/random/daily',
          ]}
          likeCount={10}
          commentCount={10}
        />
        <QuizCard
          categoryTitle="카테고리"
          quizDescription="Title Text Title Text Title Text Title Text"
          images={['https://source.unsplash.com/random/?programming']}
          likeCount={10}
          commentCount={10}
        />
        <QuizCard
          categoryTitle="카테고리"
          quizDescription="Title Text Title Text Title Text Title Text"
          images={[
            'https://source.unsplash.com/random/?programming',
            'https://source.unsplash.com/random/daily',
          ]}
          likeCount={10}
          commentCount={10}
          quizType="ox"
        />
        <QuizCard
          categoryTitle="카테고리"
          quizDescription="Title Text Title Text Title Text Title Text"
          likeCount={10}
          commentCount={10}
          images={['https://source.unsplash.com/random/?programming']}
          sizeType="small"
        />
        <QuizCard
          categoryTitle="카테고리"
          quizDescription="Title Text Title Text Title Text Title Text"
          likeCount={10}
          commentCount={10}
          quizType="ox"
          sizeType="small"
        />
      </div>
    </div>
  );
}

export default ToksMainPage;
