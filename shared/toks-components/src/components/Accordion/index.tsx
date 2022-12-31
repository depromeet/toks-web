import { ReactNode } from 'react';

import { Icon } from '@depromeet/toks-components';

import { Body, Container, Details, Summary } from './style';

interface AccordionProps {
  headerNodes: ReactNode;
  bodyNodes: ReactNode;
  backgroundColor: string;
  isFold: boolean;
  onFold: () => void;
}

export function Accordion({ headerNodes, bodyNodes, backgroundColor, isFold, onFold }: AccordionProps) {
  return (
    <Container style={{ backgroundColor }}>
      <Details open={isFold} onToggle={onFold}>
        <Summary>
          {headerNodes}
          {isFold ? (
            <Icon iconName="ic-chevron-up" style={{ marginLeft: '24px' }} />
          ) : (
            <Icon iconName="ic-chevron-down" style={{ marginLeft: '24px' }} />
          )}
        </Summary>
        <Body>{bodyNodes}</Body>
      </Details>
    </Container>
  );
}
