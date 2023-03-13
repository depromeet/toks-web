import { KeyOfColors, theme } from '@depromeet/theme';
import { colors } from '@depromeet/theme/dist/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Icon } from '../Icon';
import { IconName } from '../Icon/icons';
import { Text } from '../Text';
import { Typography } from '../Text/token';

type ButtonType = 'primary' | 'general' | 'ghost' | 'danger';

type ButtonSize = 'medium' | 'large';

type ButtonStatus = 'normal' | 'hover' | 'disabled';

type ButtonHTMLType = 'button' | 'reset' | 'submit' | undefined;

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  icon?: IconName;
  type?: ButtonType;
  width?: number;
  size?: ButtonSize;
  buttonStyle?: React.CSSProperties;
  disabled?: boolean;
  htmlType?: ButtonHTMLType;
  children: React.ReactNode;
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
    danger: '#EB4852',
  },
  hover: {
    primary: '#E96C12',
    ghost: colors.gray070,
    general: colors.gray040,
    danger: '#C63135',
  },
  disabled: {
    primary: `${theme.colors.primary_opacity}`,
    ghost: colors.gray080,
    general: colors.gray060,
    danger: '#71292B',
  },
};

const BUTTOON_TEXT_COLOR: { [key in ButtonType]: KeyOfColors } = {
  primary: 'white',
  general: 'gray110',
  ghost: 'white',
  danger: 'white',
};

const BUTTOON_TEXT_SIZE: { [key in ButtonSize]: Typography } = {
  large: 'subhead',
  medium: 'headline',
};

const BUTTON_HEIGHT: { [key in ButtonSize]: string } = {
  large: '54px',
  medium: '46px',
};

const ICON_SIZE: { [key in ButtonSize]: number } = {
  large: 28,
  medium: 26,
};

// TODO: 다크 모드 대응
// TODO: spinner 로티로 변경
export function Button({
  icon,
  type = 'primary',
  width,
  size = 'medium',
  disabled,
  buttonStyle,
  htmlType,
  children,
  ...rest
}: Props) {
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
    >
      {icon && <Icon size={ICON_SIZE[size]} iconName={icon} />}
      <Text color={BUTTOON_TEXT_COLOR[type]} variant={BUTTOON_TEXT_SIZE[size]}>
        {children}
      </Text>
    </StyledButton>
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

  ${({ width, disabled, size, buttontype }) => {
    return css`
      background: ${BUTTON_COLOR[disabled ? 'disabled' : 'normal'][buttontype]};
      width: ${width ? `${width}px` : '100%'};
      height: ${BUTTON_HEIGHT[size]};
      border: ${buttontype !== 'ghost' ? 'none' : '1px solid #A5A5A5'};
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
