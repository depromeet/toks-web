import styled from '@emotion/styled';

function Home() {
  return (
    <>
      <TextTestOne>Test one</TextTestOne>
      <TextTestTwo>Test two</TextTestTwo>
    </>
  );
}

const TextTestOne = styled.span`
  font-weight: 700;
`;
const TextTestTwo = styled.span`
  font-weight: 300;
`;
export default Home;
