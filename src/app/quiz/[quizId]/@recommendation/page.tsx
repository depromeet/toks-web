type Props = {
  searchParams: {
    categoryId: string;
  };
};

async function RecommendatonPage({ searchParams }: Props) {
  console.log(searchParams);
  return <div style={{ backgroundColor: '#d18760' }}></div>;
}

export default RecommendatonPage;
