import styled from '@emotion/styled';
import { Button as BaseButton } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { ComponentProps } from 'react';

type ButtonType = 'primary' | 'general' | 'ghost';

type ButtonSize = 'medium' | 'large';

type BaseButtonProps = ComponentProps<typeof BaseButton>;

type ButtonStatus = 'normal' | 'hover' | 'disabled';

interface Props extends Omit<BaseButtonProps, 'type'> {
  type?: ButtonType;
  width?: number;
  htmlType?: BaseButtonProps['type'];
  size?: ButtonSize;
  buttonStyle?: React.CSSProperties;
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
    ghost: '#A5A5A5',
    general: '#DFDFDF',
  },
  disabled: {
    primary: 'rgba(255, 134, 47, 0.4)',
    ghost: 'rgba(165, 165, 165, 0.4)',
    general: 'rgba(223, 223, 223, 0.4)',
  },
};

const BUTTOON_TEXT_COLOR: { [key in ButtonType]: string } = {
  primary: '#fff',
  general: '#000',
  ghost: '#fff',
};

const BUTTON_HEIGHT: { [key in ButtonSize]: string } = {
  large: '64px',
  medium: '46px',
};

// TODO: 다크 모드 대응
export function Button({ type = 'primary', width, size = 'medium', disabled, htmlType, buttonStyle, ...rest }: Props) {
  return (
    <StyledBaseButton
      // TODO: inline style로 적용한 부분 제외하기
      style={{
        background: BUTTON_COLOR[disabled ? 'disabled' : 'normal'][type],
        borderRadius: '32px',
        width: width ?? '100%',
        height: BUTTON_HEIGHT[size],
        border: type !== 'ghost' ? 'none' : '1px solid #A5A5A5',
        color: BUTTOON_TEXT_COLOR[type],
        fontWeight: '700',
        fontSize: '16px',
        ...buttonStyle,
      }}
      buttontype={type}
      type={htmlType}
      disabled={disabled}
      loadingIcon={<ProgressSpinner strokeWidth="6px" style={{ width: '26px', height: '26px', margin: 0 }} />}
      {...rest}
    />
  );
}

const StyledBaseButton = styled(BaseButton)<{ buttontype: ButtonType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  &:hover {
    background: ${({ buttontype }) => BUTTON_COLOR.hover[buttontype]} !important;
  }

  &:focus {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }

  .p-progress-spinner-circle {
    animation: unset;
    stroke: ${({ buttontype }) => BUTTOON_TEXT_COLOR[buttontype]};
  }
`;
