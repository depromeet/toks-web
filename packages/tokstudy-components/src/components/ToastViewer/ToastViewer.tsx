import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Viewer, ViewerProps } from '@toast-ui/react-editor';

export interface ToastViewerProps extends ViewerProps {
  answer?: string;
  height?: string;
  overFlow?: 'auto' | 'visible';
}
export default function ToastViewer({ answer, height, overFlow = 'auto', ...rest }: ToastViewerProps) {
  return (
    <ViewerWrapper height={height} overFlow={overFlow}>
      <Viewer initialValue={answer} theme="dark" {...rest} />
    </ViewerWrapper>
  );
}

const ViewerWrapper = styled.div<ToastViewerProps>`
  display: flex;
  flex-direction: column;
  overflow-y: ${({ overFlow }) => overFlow} !important;

  .toastui-editor-contents {
    background-color: ${theme.colors.gray100};
    overflow: ${({ overFlow }) => overFlow};
    padding: 10px;
    border-radius: 8px;
    ${props => {
      if (props.overFlow === 'visible') {
        return '';
      }
      return css`
        height: ${props.height ? `${props.height}` : '100%'} !important; ;
      `;
    }}

    & * {
      color: ${theme.colors.gray040};
    }

    & code {
      background-color: ${theme.colors.gray080};
    }
  }

  .toastui-editor-contents p {
    color: ${theme.colors.gray040};

    //styleName: body-02;
    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.6px;
    text-align: left;
  }
`;
