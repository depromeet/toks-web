'use client';

import Image from 'next/image';
import { forwardRef, useState } from 'react';

import { ICON_URL } from '@/common/constants';
import { cn } from '@/common/utils';

import { InputProps } from './types';
import { Text } from '../Text';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      errorMessage,
      width,
      height,
      onFocus,
      onBlur,
      suffix,
      ...props
    }: InputProps,
    ref
  ) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <div className="relative flex w-full flex-col gap-6px">
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
            typo="caption"
            color="dangerDefault"
            style={{ position: 'absolute', bottom: '-20px', whiteSpace: 'pre' }}
          >
            {errorMessage}
          </Text>
        )}
      </div>
    );
  }
);
