import React from 'react';
import { cn } from '@utils/cn';

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'cinema' | 'date' | 'time';
  isSelected?: boolean;
}

const variants = {
  cinema: {
    layout: 'flex gap-[1rem] px-[0.8rem] py-[0.5rem] cursor-not-allowed',
    style: 'border-[0.05rem] rounded-[0.6rem] border-gray-600 bg-gray-800',
    selectedStyle: 'border-[0.05rem] rounded-[0.6rem] border-violet-400 gradient-3',
    text: 'font-button2 text-gray-0 opacity-40',
    selectedText: 'font-button3 text-gray-0',
  },
  date: {
    layout: 'flex flex-col justify-end gap-[0.2rem] shrink-0 w-[4.8rem] h-[5.2rem] px-[0.8rem] py-[0.5rem]',
    style: 'border-[0.05rem] rounded-[0.6rem] border-gray-600 bg-gray-800 opacity-50',
    selectedStyle: 'border-[0.05rem] rounded-[0.6rem] border-violet-400 bg-[rgba(102,10,217,0.30)]',
    text: 'text-gray-0',
    selectedText: 'text-gray-0',
  },
  time: {
    layout: 'flex justify-center items-center gap-[1rem] px-[1.5rem] py-[0.7rem]',
    style: 'border-[0.1rem] rounded-[100rem] border-gray-600 bg-gray-800 ',
    selectedStyle: 'border-[0.1rem] rounded-[100rem] border-violet-400 bg-[rgba(102,10,217,0.30)]',
    text: 'font-label1 text-gray-0',
    selectedText: 'font-label1 text-gray-0',
  },
} as const;

export default function Chip({
  variant,
  isSelected,
  children,
  className,
  ...props
}: ChipProps) {
  const { layout, style, selectedStyle, text, selectedText } = variants[variant];

  return (
    <button
      className={cn(
        layout,
        isSelected ? selectedStyle : style,
        isSelected ? selectedText: text,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
