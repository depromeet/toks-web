import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Dropdown } from 'primereact/dropdown';
import { ComponentProps } from 'react';

import { Text } from '../Text';

type DropdownProps = ComponentProps<typeof Dropdown>;

interface Props extends DropdownProps {
  width?: number;
  height?: number;
  label?: string;
  isClicked?: boolean;
}

export function DropDown({ label, width, height, isClicked, ...props }: Props) {
  return (
    <DropDownWrapper isClicked={isClicked}>
      {label ? (
        <Text variant="body02" className="label">
          {label}
        </Text>
      ) : (
        <></>
      )}
      <StyledDropdown isClicked={isClicked} width={width} height={height} {...props} />;
    </DropDownWrapper>
  );
}

const DropDownWrapper = styled.div<{ isClicked: boolean | undefined }>`
  display: flex;
  flex-direction: column;
  .label {
    color: ${theme.colors.gray070};
  }

  gap: 8px;
  ${props =>
    props.isClicked === true &&
    css`
      .label {
        color: ${theme.colors.white};
      }
    `};
`;

const StyledDropdown = styled(Dropdown)<Props>`
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
      width: ${width ? `${width}px` : '280px'};
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

  ${props =>
    props.isClicked === true &&
    css`
      .p-dropdown-trigger-icon {
        padding-right: 6px;
        color: transparent !important;
        background-image: url('https://toks-web-assets.s3.amazonaws.com/selectedTrigger.svg') !important;
      }
    `};

  .p-dropdown-trigger-icon {
    padding-right: 6px;
    color: transparent !important;
    background-image: url('https://toks-web-assets.s3.amazonaws.com/disabledTrigger.svg');
  }
`;
