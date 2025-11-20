import { cn } from "@utils/cn";
import type { DiscountItem } from '@constants/discount';
import type { ReactNode } from 'react';

type DiscountGridProps = {
  items: DiscountItem[];
  selectedId: number | null;
  onSelect: (_id: number | null) => void;
  firstItem?: boolean;
  children?: ReactNode;
};

export const DiscountGrid = ({
  items,
  selectedId,
  onSelect,
  firstItem = false,
  children,
}: DiscountGridProps) => {
  return (
    <div className='rounded-[0.4rem] bg-gray-100 px-[1.5rem] py-[1.2rem]' role='group' aria-label='할인 수단 목록'>
      <div className='grid grid-cols-2 gap-[0.8rem]'>
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onSelect(selectedId === item.id ? null : item.id)}
            className={cn(
              'font-button1 rounded-[0.4rem] border-[0.1rem] bg-white px-[1rem] py-[1.2rem]',
              index === 0 && firstItem && 'col-span-2',
              selectedId === item.id
                ? 'border-violet-600 text-violet-600'
                : 'border-gray-200 text-gray-500'
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
};

export default DiscountGrid;