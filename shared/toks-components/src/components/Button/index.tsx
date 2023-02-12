import { theme } from '@depromeet/theme';
import { colors } from '@depromeet/theme/dist/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ButtonType = 'primary' | 'general' | 'ghost';

type ButtonSize = 'medium' | 'large';

type ButtonStatus = 'normal' | 'hover' | 'disabled';

type ButtonHTMLType = 'button' | 'reset' | 'submit' | undefined;

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: ButtonType;
  width?: number;
  size?: ButtonSize;
  buttonStyle?: React.CSSProperties;
  disabled?: boolean;
  htmlType?: ButtonHTMLType;
}

type ButtonColorMap = {
  [key in ButtonStatus]: {
    [key in ButtonType]: string;
  };
};

const BUTTON_COLOR: ButtonColorMap = {
  normal: {
    primary: '#FF862F',
    ghost: 'transparent',
    general: '#FFFFFF',
  },
  hover: {
    primary: '#E96C12',
    ghost: colors.gray070,
    general: colors.gray040,
  },
  disabled: {
    primary: `${theme.colors.primary_opacity}`,
    ghost: colors.gray070,
    general: colors.gray040,
  },
};

const BUTTOON_TEXT_COLOR: { [key in ButtonType]: string } = {
  primary: '#fff',
  general: '#000',
  ghost: '#fff',
};

const BUTTON_HEIGHT: { [key in ButtonSize]: string } = {
  large: '54px',
  medium: '46px',
};

// TODO: 다크 모드 대응
export function Button({ type = 'primary', width, size = 'medium', disabled, buttonStyle, htmlType, ...rest }: Props) {
  return (
    <StyledButton
      style={{
        ...buttonStyle,
      }}
      width={width}
      size={size}
      buttontype={type}
      disabled={disabled}
      type={htmlType}
      {...rest}
    />
  );
}

const StyledButton = styled('button')<{
  buttontype: ButtonType;
  disabled?: boolean;
  width?: number;
  size: ButtonSize;
}>`
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  font-weight: 700;
  font-size: 16px;

  ${props => {
    const { width, disabled, size, buttontype } = props;
    return css`
        background: ${BUTTON_COLOR[disabled ? 'disabled' : 'normal'][buttontype]};
        width: ${width ? `${width}px` : '100%'};
        height: ${BUTTON_HEIGHT[size]};
        border: ${buttontype} !== 'ghost' ? 'none' : '1px solid #A5A5A5';
        color: ${BUTTOON_TEXT_COLOR[buttontype]};
    `;
  }}
  &:hover {
    background: ${({ buttontype }) => BUTTON_COLOR.hover[buttontype]} !important;
  }

  &:focus {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;
