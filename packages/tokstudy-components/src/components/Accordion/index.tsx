import { ReactNode } from 'react';

import { Icon } from '../Icon';
import { Body, Container, Details, Summary } from './style';

interface AccordionProps {
  headerNodes: ReactNode;
  bodyNodes: ReactNode;
  backgroundColor: string;
  isFold: boolean;
  onFold?: () => void;
  accordionStyle?: React.CSSProperties;
}

export function Accordion({
  headerNodes,
  bodyNodes,
  backgroundColor,
  isFold = true,
  onFold,
  accordionStyle,
}: AccordionProps) {
  return (
    <Container style={{ backgroundColor, ...accordionStyle }}>
      <Details onClick={onFold}>
        <Summary>
          {headerNodes}
          {!isFold ? (
            <Icon iconName="ic-chevron-up" style={{ marginLeft: '24px' }} />
          ) : (
            <Icon iconName="ic-chevron-down" style={{ marginLeft: '24px' }} />
          )}
        </Summary>
        {!isFold && <Body>{bodyNodes}</Body>}
      </Details>
    </Container>
  );
}
