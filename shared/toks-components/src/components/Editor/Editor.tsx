import '@toast-ui/editor/dist/i18n/ko-kr';
import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Editor as TuiEditor, EditorProps as TuiEditorProps } from '@toast-ui/react-editor';
import { useCombinedRefs, useDebounce } from '@toss/react';
import Prism from 'prismjs';
import { Ref, forwardRef, useRef } from 'react';

import { Text } from '../Text';

export interface EditorProps extends TuiEditorProps {
  label?: string;
  required?: boolean;
  onChange: (data: string) => void;
}

export default forwardRef(function Editor(
  { onChange, label, required, ...rest }: EditorProps,
  forwardRef: Ref<TuiEditor>
) {
  const ref = useRef<TuiEditor | null>(null);
  const editorRef = useCombinedRefs<TuiEditor>(forwardRef, ref);

  const handleChange = useDebounce(() => {
    if (ref.current != null) {
      const data = ref.current.getInstance().getMarkdown();
      onChange?.(data);
    }
  }, 200);

  return (
    <EditorWrapper>
      <Text variant="headline">
        {label}
        {required && '*'}
      </Text>
      <TuiEditor
        ref={editorRef}
        initialEditType="markdown"
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
});

const EditorWrapper = styled.div`
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .toastui-editor-defaultUI .toastui-editor-md-tab-container {
    background-color: ${theme.colors.gray100} !important;
  }

  .toastui-editor-md-tab-container .toastui-editor-tabs {
    height: 44px !important;
    display: inline-block;
  }
  .toastui-editor-md-tab-container .tab-item {
    background-color: transparent !important;
    height: 44px !important;
    line-height: 44px !important;
    margin-top: 0;
    border: none;

    &.active {
      color: ${theme.colors.white} !important;
    }
  }

  .toastui-editor-dropdown-toolbar {
    background-color: ${theme.colors.gray100};
  }

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
    background-color: ${theme.colors.gray100};
    border: none;
  }

  .toastui-editor-ww-container {
    background-color: ${theme.colors.gray100};
  }

  .toastui-editor-defaultUI .ProseMirror,
  .toastui-editor-defaultUI {
    color: ${theme.colors.white} !important;
  }

  .toastui-editor-md-code-block-line-background {
    background-color: ${theme.colors.gray090};
  }
  .toastui-editor-defaultUI-toolbar button {
    border: none;
  }

  .toastui-editor-contents {
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
