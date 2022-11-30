import { Dropdown, DropDown, Text, ToksHeader } from '@depromeet/toks-components';

import { JoinStudyBox } from 'components/JoinStudy/JoinStudyBox';
import { useState } from 'react';

import { HeaderContainer, JoinGuide, pageTitle } from './style';

function JoinStudy() {
  const citySelectItems = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' },
  ];

  const [city, setCity] = useState('');
  return (
    <>
      <HeaderContainer>
        <ToksHeader imgUrl={'https://asset.tokstudy.com/img_penguin.png'} userName={'김채림'} children={undefined} />
      </HeaderContainer>
      <JoinGuide>
        <Text size={46} weight={700} css={pageTitle}>
          똑스와 함께해 볼까요?
        </Text>
      </JoinGuide>
      <DropDown value={city} options={citySelectItems} onChange={e => setCity(e.value)} placeholder="placeholder" />
      <JoinStudyBox />
    </>
  );
}

export default JoinStudy;
