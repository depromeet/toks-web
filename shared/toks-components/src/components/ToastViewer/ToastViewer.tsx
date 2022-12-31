import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Viewer, ViewerProps } from '@toast-ui/react-editor';

export interface ToastViewerProps extends ViewerProps {
  answer?: string;
}
export default function ToastViewer({ answer, ...rest }: ToastViewerProps) {
  return (
    <ViewerWrapper>
      <Viewer initialValue={answer} theme="dark" {...rest} />
    </ViewerWrapper>
  );
}

const ViewerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto !important;

  .toastui-editor-contents {
    background-color: ${theme.colors.gray100};
    padding: 10px;
    border-radius: 8px;
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
