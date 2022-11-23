import styled from '@emotion/styled';
import { Tooltip as BaseTooltip } from 'primereact/tooltip';
import { ComponentProps } from 'react';

// type ButtonType = 'primary' | 'general' | 'ghost';

// type ButtonSize = 'medium' | 'large';

// type BaseButtonProps = ComponentProps<typeof BaseButton>;

// type ButtonStatus = 'normal' | 'hover' | 'disabled';

// interface Props extends Omit<BaseButtonProps, 'type'> {
//   type?: ButtonType;
//   htmlType?: BaseButtonProps['type'];
//   size?: ButtonSize;
// }

// type ButtonColorMap = {
//   [key in ButtonStatus]: {
//     [key in ButtonType]: string;
//   };
// };

// const BUTTON_COLOR: ButtonColorMap = {
//   normal: {
//     primary: '#FF862F',
//     ghost: 'transparent',
//     general: '#FFFFFF',
//   },
//   hover: {
//     primary: '#E96C12',
//     ghost: '#A5A5A5',
//     general: '#DFDFDF',
//   },
//   disabled: {
//     primary: 'rgba(255, 134, 47, 0.4)',
//     ghost: 'rgba(165, 165, 165, 0.4)',
//     general: 'rgba(223, 223, 223, 0.4)',
//   },
// };

// const BUTTOON_TEXT_COLOR: { [key in ButtonType]: string } = {
//   primary: '#fff',
//   general: '#000',
//   ghost: '#fff',
// };

// const BUTTON_HEIGHT: { [key in ButtonSize]: string } = {
//   large: '64px',
//   medium: '46px',
// };

/*
  -툴팁-
  내용,
  방향,
  배경색,
  래디우스,
  패딩,
  글자색,
  폰트굵기
*/

interface TooltipProps {
  description: string,
  position: string,
  backgroundColor: string,
  borderRadius: string,
  padding: string,
  fontSize: string,
  fontColor: string,
  fontWeight: number
}

export function Tooltip({ 
  description,
  position = "top",
  backgroundColor = `${theme.colors.white}`,
  borderRadius
}: TooltipProps) {
  return (
    <StyledTooltip
      // TODO: inline style로 적용한 부분 제외하기
      style={{
        background: BUTTON_COLOR[disabled ? 'disabled' : 'normal'][type],
        borderRadius: '32px',
        width: '224px',
        height: BUTTON_HEIGHT[size],
        border: type !== 'ghost' ? 'none' : '1px solid #A5A5A5',
        color: BUTTOON_TEXT_COLOR[type],
        fontWeight: '700',
        fontSize: '16px',
      }}
      buttontype={type}
      type={htmlType}
      disabled={disabled}
      loadingIcon={<ProgressSpinner strokeWidth="6px" style={{ width: '26px', height: '26px', margin: 0 }} />}
      {...rest}
    />
  );
}

const StyledTooltip = styled(Tooltip)`
  
`;
