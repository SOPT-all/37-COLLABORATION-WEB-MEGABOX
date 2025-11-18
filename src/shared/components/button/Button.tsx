import React from 'react';
import { cn } from '@utils/cn';

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'sub';
}

const variants = {
  primary: {
    layout: 'w-full px-[1rem] py-[1.5rem]',
    style: 'rounded-[0.8rem] bg-violet-500 active:bg-violet-700',
    text: 'text-button4 text-gray-0',
  },
  secondary: {
    layout: 'w-full px-[1rem] py-[1.2rem]',
    style: 'border border-gray-300 rounded-[0.4rem] active:border-gray-100 active:bg-gray-600',
    text: 'text-button3 text-gray-400 active:text-gray-100',
  },
  sub: {
    layout: 'w-fit px-[0.8rem] py-[0.7rem]',
    style: 'border border-gray-300 rounded-[0.4rem] active:border-gray-100 active:bg-gray-600',
    text: 'text-button1 text-gray-400 active:text-gray-0',
  },
} as const;

export default function Button ({
  variant,
  children,
  className,
  ...props
}: ButtonProp) {
  const base = 'flex justify-center items-center gap-[1rem]';
  const { layout, style, text } = variants[variant];

  return (
    <button
      type={props.type ?? 'button'}
      className={cn(base, layout, style, text, className)}
      {...props}
    >
      {children}
    </button>
  );
}