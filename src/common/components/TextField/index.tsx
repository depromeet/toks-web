'use client';

import { forwardRef, useState } from 'react';

import { Text, cn, typography } from '@/common';

import { TextFieldProps } from './types';

export const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  (
    {
      label,
      name,
      errorMessage,
      onFocus,
      onBlur,
      suffix,
      className,
      height,
      ...props
    }: TextFieldProps,
    ref
  ) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <div className={cn('relative flex w-full flex-col gap-6px', className)}>
        {label && (
          <label htmlFor={name}>
            <Text typo="body" color="white">
              {label}
            </Text>
          </label>
        )}
        <div
          className={cn(
            'align-center flex rounded-8px border-none bg-gray-100 px-16px py-14px',
            'hover:border-2 hover:border-solid hover:border-white',
            'placeholder:text-gray-70',
            typography['body'],
            {
              'border-2 border-solid border-primary-default': isFocus,
              'border-2 border-solid border-danger-default':
                Boolean(errorMessage),
            }
          )}
          style={{
            height: height ?? '48px',
          }}
        >
          <textarea
            className="h-full w-full border-none bg-transparent text-white outline-none"
            autoComplete="off"
            ref={ref}
            id={name}
            name={name}
            onFocus={(e) => {
              onFocus?.(e);
              setIsFocus(true);
            }}
            onBlur={(e) => {
              onBlur?.(e);
              setIsFocus(false);
            }}
            {...props}
          />
          {suffix && suffix}
        </div>
        {errorMessage && (
          <Text
            className="absolute -bottom-20px whitespace-pre"
            typo="caption"
            color="dangerDefault"
          >
            {errorMessage}
          </Text>
        )}
      </div>
    );
  }
);
