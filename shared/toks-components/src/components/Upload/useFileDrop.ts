import { useCallback, useEffect, useRef, useState } from 'react';
import { useToast } from '../../hooks';

import { formatAccepts } from './utils';

interface OptionProps {
  accepts: string[];
  multiple: boolean;
  onDropFiles: (files: File[]) => void;
  maxCount: number
}

function useFileDrop({ accepts, multiple, onDropFiles, maxCount }: OptionProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const {open} = useToast()

  const convertFileType = (fileType: string) => fileType.split('/')[1] ?? '';

  const onChangeFile = useCallback(
    (e: Event) => {
      if (!(e.target as HTMLInputElement).files) {
        return;
      }

      const selectFiles = (e.target as HTMLInputElement).files as FileList;
      const uploadFiles = Array.from(selectFiles);

if(uploadFiles.length + files.length > maxCount) {
open({title:'그만 넣읏에요', type:'danger'})
  return;
}

      onDropFiles(uploadFiles);
      setFiles(prevFiles => [...prevFiles, ...uploadFiles]);
    },
    [onDropFiles]
  );

  const onDragFile = useCallback(
    (e: DragEvent) => {
      if (!e?.dataTransfer?.files) {
        return;
      }

      const selectFiles = e.dataTransfer.files;
      const uploadFiles = Array.from(selectFiles);
      const filteredFiles = uploadFiles.filter(file => {
        const fileType = convertFileType(file.type);
        const isAcceptFile = accepts.includes(fileType);
        if (!isAcceptFile) {
          alert(`${file.name}는 허용되지 않는 파일 형식입니다.`); // TODO: alert 대신 다른 방법으로 처리
        }
        return isAcceptFile;
      });

      if(uploadFiles.length + files.length > maxCount) {
open({title:'이미지는 3개까지 등록할 수 있어요.', type:'danger'})
  return;
}

      onDropFiles(filteredFiles);
      setFiles(prevFiles => [...prevFiles, ...filteredFiles]);
    },
    [accepts, onDropFiles]
  );

  const onDragEnter = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragActive(true);
  }, []);

  const onDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragActive(false);
  }, []);

  const onDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      onDragFile(e);
      setIsDragActive(false);
    },
    [onDragFile]
  );

  const onRemoveFile = useCallback((listIndex: number) => {
    setFiles(prevFiles => {
      const newFiles = [...prevFiles];
      newFiles.splice(listIndex, 1);
      return newFiles;
    });
  }, []);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    const input = inputRef.current;

    if (accepts) {
      input.setAttribute('accept', formatAccepts(accepts));
    }

    if (multiple) {
      input.setAttribute('multiple', 'multiple');
    }
  }, [inputRef, accepts, multiple]);

  useEffect(() => {
    if (!labelRef.current) {
      return;
    }

    const label = labelRef.current;

    label.addEventListener('dragenter', onDragEnter);
    label.addEventListener('dragleave', onDragLeave);
    label.addEventListener('dragover', onDragOver);
    label.addEventListener('drop', onDrop);

    return () => {
      label?.removeEventListener('dragenter', onDragEnter);
      label?.removeEventListener('dragleave', onDragLeave);
      label?.removeEventListener('dragover', onDragOver);
      label?.removeEventListener('drop', onDrop);
    };
  }, [labelRef, onDragEnter, onDragLeave, onDragOver, onDrop]);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    const input = inputRef.current;

    input.setAttribute('type', 'file');
    input.addEventListener('change', onChangeFile);
    return () => {
      input?.removeEventListener('change', onChangeFile);
    };
  }, [inputRef, onChangeFile]);

  return {
    inputRef,
    labelRef,
    files,
    isDragActive,
    onRemoveFile,
  };
}

export default useFileDrop;
