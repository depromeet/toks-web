'use client';

import Image from 'next/image';
import { forwardRef, useState } from 'react';

import { ICON_URL, Text, cn, typography } from '@/common';

import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      errorMessage,
      onFocus,
      onBlur,
      suffix,
      className,
      ...props
    }: InputProps,
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
            'align-center flex h-48px rounded-8px border-none bg-gray-110 px-14px py-0',
            'hover:border-2 hover:border-solid hover:border-white',
            'placeholder:text-gray-70',
            typography['body'],
            {
              'border-2 border-solid border-primary-default': isFocus,
              'border-2 border-solid border-danger-default':
                Boolean(errorMessage),
            }
          )}
          {...props}
        >
          <input
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
          {errorMessage && (
            <Image src={ICON_URL.DANGER} alt="경고" width={22} height={22} />
          )}
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
