import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Viewer, ViewerProps } from '@toast-ui/react-editor';

export interface ToastViewerProps extends ViewerProps {
  answer?: string;
  height?: number;
}
export default function ToastViewer({ answer, height, ...rest }: ToastViewerProps) {
  return (
    <ViewerWrapper height={height}>
      <Viewer initialValue={answer} theme="dark" {...rest} />
    </ViewerWrapper>
  );
}

const ViewerWrapper = styled.div<ToastViewerProps>`
  display: flex;
  flex-direction: column;
  overflow-y: auto !important;

  .toastui-editor-contents {
    background-color: ${theme.colors.gray100};
    padding: 10px;
    border-radius: 8px;
    ${props => {
      return css`
        height: ${props.height ? `${props.height}px` : '100%'} !important; ;
      `;
    }}
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
