import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Dropdown, DropdownProps } from 'primereact/dropdown';
import { forwardRef } from 'react';

import { Text } from '../Text';

interface Props extends DropdownProps {
  width?: number;
  height?: number;
  label?: string;
}

export const DropDown = forwardRef<Dropdown, Props>(({ label, width, height, required, ...props }: Props, ref) => {
  return (
    <DropDownWrapper>
      {label && (
        <Text variant="body02" className="label">
          {label}
          {required && '*'}
        </Text>
      )}
      <StyledDropdown ref={ref} width={width} height={height} required={required} {...props} />
    </DropDownWrapper>
  );
});

const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledDropdown = styled(Dropdown)`
  border-radius: 8px !important;
  padding: 14px 16px;
  background: ${theme.colors.gray100} !important;
  outline: none !important;
  border: none !important;
  list-style: none !important;
  box-shadow: none !important;

  ${props => {
    const { width, height } = props;

    return css`
      width: ${width ? `${width}px` : '100%'};
      height: ${height ? `${height}px` : '48px'};
    `;
  }}

  .p-placeholder {
    color: ${theme.colors.gray070};
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    font-family: 'Spoqa Han Sans Neo' !important ;
  }

  .p-inputtext {
    padding: 0;
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  .p-dropdown-trigger-icon {
    padding-right: 6px;
    color: transparent !important;
    background-image: url('https://toks-web-assets.s3.amazonaws.com/disabledTrigger.svg');
  }
`;
