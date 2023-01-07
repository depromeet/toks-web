import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';

import { Icon } from '../Icon';
import { Text } from '../Text';
import useFileDrop from './useFileDrop';

export interface UploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  accepts?: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDropFiles: (files: File[]) => void;
  labelText: string;
  labelStyle?: React.CSSProperties;
  height?: number;
}

export const Upload = ({
  accepts = ['png', 'jpeg'],
  labelText,
  multiple = false,
  required,
  height = 200,
  labelStyle,
  onDropFiles,
  ...rest
}: UploadProps) => {
  const { inputRef, labelRef, isDragActive, onRemoveFile, files } = useFileDrop({ accepts, multiple, onDropFiles });

  const renderFileList = () => {
    if (isDragActive) {
      return (
        <Text variant="subhead" color="gray050">
          파일을 놓으세요
        </Text>
      );
    }

    if (files.length === 0) {
      return (
        <>
          <Icon iconName="ic-file" size={28} />
          <Text variant="subhead" color="gray050">
            {accepts.map(accept => `.${accept} `.toUpperCase())}
          </Text>
        </>
      );
    }

    return (
      <FileList>
        {files.map((file, index) => (
          <FileListItem as="li" key={`${file.name}-${index}-${file.stream}`}>
            <div
              style={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Icon iconName="ic-file" />
              <Text
                variant="body02"
                color="white"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {file.name}
              </Text>
            </div>
            <InitialButton
              type="button"
              onClick={e => {
                e.preventDefault(); // label 클릭 시 input file이 열리는 것을 방지
                onRemoveFile(index);
              }}
            >
              <Icon iconName="ic-delete" />
            </InitialButton>
          </FileListItem>
        ))}
      </FileList>
    );
  };

  return (
    <div>
      <Text variant="headline">
        {labelText}
        {required && '*'}
      </Text>
      <StyledUpload
        height={height}
        ref={labelRef}
        style={{
          ...labelStyle,
        }}
      >
        <input type="file" name="upload" className="blind" ref={inputRef} {...rest} />
        {renderFileList()}
      </StyledUpload>
    </div>
  );
};

export const InitialButton = styled('button')`
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FileList = styled('ul')`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;

  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FileListItem = styled('li')`
  list-style: none;

  width: 100%;

  background-color: ${theme.colors.gray100};
  border-radius: 8px;

  height: 48px;

  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-shrink: 0;
`;

export const StyledUpload = styled('label')<{ height?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-color: ${theme.colors.gray110};

  border: 1px dashed ${theme.colors.gray080};
  border-radius: 16px;

  width: 100%;
  height: ${({ height }) => height}px;
  gap: 10px;

  margin-top: 16px;

  padding: 16px;

  cursor: pointer;
`;
