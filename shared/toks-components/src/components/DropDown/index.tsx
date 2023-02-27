import { theme } from '@depromeet/theme';
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
  height?: number;
  label?: string;
  errorMessage?: string;
  value?: DropdownOption;
  options: DropdownOption[];
}

export const DropDown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ value, options, ...props }: DropdownProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectItem, setSelectItem] = useState('');
    console.log(ref);

    return (
      <DropDownWrapper ref={ref} onBlur={() => setIsOpen(false)} onClick={() => setIsOpen(prev => !prev)}>
        <span>
          <Text variant="body02">{selectItem}</Text>
        </span>
        <div>{isOpen ? <Icon iconName="ic-chevron-up" /> : <Icon iconName="ic-chevron-down" />}</div>
        {isOpen && (
          <DropDownOptions>
            {options.map(({ label, value }) => (
              <DropDownOption
                key={value}
                onClick={e => {
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
      </DropDownWrapper>
    );
  }
);

const DropDownWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 1.5rem;
  background: ${theme.colors.gray100};
  align-items: center;
  padding: 11px 16px;
  border-radius: 8px;
  outline: none;
  justify-content: space-between;
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

const DropDownOption = styled.li`
  :hover {
    background: ${theme.colors.gray070};
  }
  padding: 13px 16px;
  cursor: pointer;
`;
