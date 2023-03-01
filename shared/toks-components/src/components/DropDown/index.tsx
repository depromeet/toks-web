import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, useState } from 'react';
import { Icon } from '../Icon';

import { Text } from '../Text';

type DropdownOption = {
  label: string;
  value: number;
};

interface DropdownProps {
  width?: number;
  label?: string;
  required?: boolean;
  errorMessage?: string;
  options: DropdownOption[];
}

export const DropDown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ width, options, label, required, errorMessage }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectItem, setSelectItem] = useState('');

    return (
      <DropDownWrapper>
        {label && (
          <Text variant="headline" className="label">
            {label}
            {required && '*'}
          </Text>
        )}
        <DropDownContainer
          tabIndex={0}
          onBlur={() => {
            setIsOpen(false);
          }}
          onClick={() => setIsOpen(prev => !prev)}
          width={width}
        >
          <span>
            <Text variant="body02">{selectItem}</Text>
          </span>
          <div>{isOpen ? <Icon iconName="ic-chevron-up" /> : <Icon iconName="ic-chevron-down" />}</div>
          {isOpen && (
            <DropDownOptions>
              {options.map(({ label, value }) => (
                <DropDownOption
                  key={value}
                  isSelected={selectItem === label ? true : false}
                  onMouseDown={e => {
                    e.stopPropagation();
                    setSelectItem(label);
                    setIsOpen(false);
                  }}
                >
                  <Text variant="body02">{label}</Text>
                </DropDownOption>
              ))}
            </DropDownOptions>
          )}
        </DropDownContainer>
        {errorMessage && (
          <Text variant="body02" color="danger">
            {errorMessage}
          </Text>
        )}
      </DropDownWrapper>
    );
  }
);

const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const DropDownContainer = styled('div')<{ width?: number }>`
  cursor: pointer;
  display: flex;
  position: relative;
  /* min-height: 1.5rem; */
  background: ${theme.colors.gray100};
  align-items: center;
  padding: 11px 16px;
  border-radius: 8px;
  outline: none;
  justify-content: space-between;

  ${({ width }) => {
    return css`
      width: ${width ? `${width}px` : '100%'};
    `;
  }}
`;

const DropDownOptions = styled.ul`
  margin: 0;
  padding: 0;
  background: ${theme.colors.gray100};
  width: 100%;
  position: absolute;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 8px;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1010;
`;

const DropDownOption = styled('li')<{ isSelected: boolean }>`
  :hover {
    background: ${theme.colors.gray070};
  }
  ${({ isSelected }) => {
    return css`
      background: ${isSelected ? `${theme.colors.gray080}` : `${theme.colors.gray100}`};
    `;
  }}

  padding: 13px 16px;
  cursor: pointer;
`;
