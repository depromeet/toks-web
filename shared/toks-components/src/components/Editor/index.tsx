import '@toast-ui/editor/dist/i18n/ko-kr';
import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor as TuiEditor, EditorProps as TuiEditorProps } from '@toast-ui/react-editor';
import { useDebounce } from '@toss/react';
import Prism from 'prismjs';
import { useRef } from 'react';

export interface EditorProps extends TuiEditorProps {
  onChange: (data: string) => void;
}

export const Editor = ({ onChange, ...rest }: EditorProps) => {
  const editorRef = useRef<TuiEditor>(null);
  const handleChange = useDebounce(() => {
    if (editorRef.current) {
      const data = editorRef.current.getInstance().getHTML();
      onChange?.(data);
    }
  }, 200);

  return (
    <EditorWrapper>
      <TuiEditor
        ref={editorRef}
        initialEditType="wysiwyg"
        viewer={false}
        height="100%"
        toolbarItems={[['bold', 'italic', 'quote', 'code', 'codeblock']]}
        placeholder="내용을 입력하세요."
        language="ko-KR"
        theme="dark"
        hideModeSwitch={true}
        onChange={handleChange}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        {...rest}
      />
    </EditorWrapper>
  );
};

const EditorWrapper = styled.div`
  height: 100%;
  border-radius: 8px;

  .toastui-editor-defaultUI {
    height: 100%;
    border-radius: 8px;
    border: 1px solid ${theme.colors.gray090};

    .toastui-editor-md-tab-container {
      border-bottom: 1px solid ${theme.colors.gray090};
    }
  }

  .toastui-editor-dark.toastui-editor-defaultUI {
    /* NOTE: Darkmode 스프라이팅 이미지 */
    .toastui-editor-toolbar-icons {
      background-position-y: -49px;
      &:hover {
        background-position-y: 3px;
      }
    }
  }

  .toastui-editor-toolbar {
    border-bottom: 1px solid ${theme.colors.gray090};
  }

  .toastui-editor-defaultUI-toolbar {
    border-radius: 8px 8px 0 0 !important;
    background-color: ${theme.colors.gray100};
    border: none;
  }

  .toastui-editor-ww-container {
    background-color: ${theme.colors.gray100};
  }

  .toastui-editor-defaultUI-toolbar button {
    border: none;
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
