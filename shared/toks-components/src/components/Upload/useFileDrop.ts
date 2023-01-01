import { useCallback, useEffect, useRef, useState } from 'react';

interface OptionProps {
  accepts?: string[];
  multiple?: boolean;
}

function useFileDrop(options?: OptionProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onChangeFile = useCallback(
    (e: Event) => {
      if (!(e.target as HTMLInputElement).files) return;

      const selectFiles = (e.target as HTMLInputElement).files as FileList;
      const uploadFiles = Array.from(selectFiles);

      setFiles(prevFiles => [...prevFiles, ...uploadFiles]);
    },
    [files]
  );

  const onDragFile = useCallback(
    (e: DragEvent) => {
      if (!e?.dataTransfer?.files) return;

      const selectFiles = e.dataTransfer.files;
      const uploadFiles = Array.from(selectFiles);

      setFiles(prevFiles => [...prevFiles, ...uploadFiles]);
    },
    [files]
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
    if (!inputRef.current || !options) return;

    if (options.accepts) {
      inputRef.current.setAttribute('accept', options.accepts.join(', '));
    }

    if (options.multiple) {
      inputRef.current.setAttribute('multiple', 'multiple');
    }
  }, [inputRef, options]);

  useEffect(() => {
    if (!labelRef.current) return;

    labelRef.current.addEventListener('dragenter', onDragEnter);
    labelRef.current.addEventListener('dragleave', onDragLeave);
    labelRef.current.addEventListener('dragover', onDragOver);
    labelRef.current.addEventListener('drop', onDrop);

    return () => {
      labelRef.current?.removeEventListener('dragenter', onDragEnter);
      labelRef.current?.removeEventListener('dragleave', onDragLeave);
      labelRef.current?.removeEventListener('dragover', onDragOver);
      labelRef.current?.removeEventListener('drop', onDrop);
    };
  }, [labelRef, onDragEnter, onDragLeave, onDragOver, onDrop]);

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.setAttribute('type', 'file');

    inputRef.current.addEventListener('change', onChangeFile);
    return () => {
      inputRef.current?.removeEventListener('change', onChangeFile);
    };
  }, [inputRef]);

  return {
    inputRef,
    labelRef,
    files,
    isDragActive,
    onRemoveFile,
  };
}

export default useFileDrop;
