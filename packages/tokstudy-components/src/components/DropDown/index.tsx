import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { forwardRef, useEffect, useState } from 'react';

import { useForwardRef } from '../../hooks/useForwardRef';
import { Icon } from '../Icon';
import { Text } from '../Text';

type DropdownOption = {
  label: string;
  value: number | string;
};

interface DropdownProps extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  width?: number;
  label?: string;
  required?: boolean;
  errorMessage?: string;
  options: DropdownOption[];
}

export const DropDown = forwardRef<HTMLInputElement, DropdownProps>(
  ({ width, options, label, required, errorMessage, ...rest }: DropdownProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectItem, setSelectItem] = useState('');
    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const handleClick = (value: number | string) => {
      // 버튼 활성화때문에 onChange이벤트 트리거 필요
      const input = document.querySelector('#input');
      if (input) {
        const nativeInputValueSetter = Object?.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          'value'
        )?.set;
        nativeInputValueSetter?.call(input, value);
        const event = new Event('change', { bubbles: true });
        input.dispatchEvent(event);
      }
    };

    const handleMouseDown = (e: React.MouseEvent) => e.preventDefault();

    // ref 초기화 시 화면도 초기화
    useEffect(() => {
      if (!inputRef.current.value) {
        setSelectItem('');
      }
    }, [inputRef.current?.value, inputRef]);

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
          <DropDownInput
            hidden
            defaultValue=""
            readOnly
            id="input"
            type="text"
            autoComplete="off"
            ref={inputRef}
            {...rest}
          />
          <Text variant="body02">{selectItem}</Text>
          <div>{isOpen ? <Icon iconName="ic-chevron-up" /> : <Icon iconName="ic-chevron-down" />}</div>
          {isOpen && (
            <DropDownOptions>
              {options.map(({ label, value }) => (
                <DropDownOption
                  key={value}
                  isSelected={selectItem === label ? true : false}
                  onMouseDown={(e: React.MouseEvent) => {
                    handleClick(value);
                    handleMouseDown(e);
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
  padding: 9px 16px;
  border-radius: 8px;
  outline: none;
  justify-content: space-between;
  ${({ width }) => {
    return css`
      width: ${width ? `${width}px` : '100%'};
    `;
  }}
`;

const DropDownInput = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
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
  top: 54px;
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
