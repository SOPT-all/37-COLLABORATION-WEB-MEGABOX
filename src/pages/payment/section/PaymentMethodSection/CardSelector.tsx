import { forwardRef } from 'react';
import * as React from 'react';
import { cn } from '@utils/cn';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import type { PaymentFormData } from '@pages/payment/schemas/payment.schema';

interface CardSelectorProps {
  selectedCard: PaymentFormData['selectedCard'];
  handleSelect: (_card: PaymentFormData['selectedCard']) => void;
}

const CARD_OPTIONS = [
  { value: 'toss-card', label: '토스카드' },
  { value: 'kb-card', label: '국민카드' },
  { value: 'kakao-bank', label: '카카오뱅크' },
  { value: 'nh-bank', label: '농협은행' },
  { value: 'hana-bank', label: '하나은행' },
  { value: 'ibk-bank', label: '기업은행' },
];

const SelectItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={cn(
        'relative flex cursor-pointer items-center rounded-[0.4rem] px-[1rem] py-[1.2rem] font-body2 text-gray-900',
        'focus:bg-gray-100 outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});

SelectItem.displayName = 'SelectItem';

const CardSelector = ({ selectedCard, handleSelect }: CardSelectorProps) => {
  return (
    <div className='mb-[1rem]'>
      <Select.Root value={selectedCard} onValueChange={handleSelect}>
        <Select.Trigger className='font-button2 flex w-full items-center justify-between rounded-[0.4rem] border border-gray-300 px-[1rem] py-[1.2rem]'>
          <Select.Value placeholder='카드 선택하기' />
          <Select.Icon>
            <ChevronDownIcon className='text-gray-300' />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className='overflow-hidden rounded-[0.8rem] border border-gray-300 bg-gray-0 shadow-lg'>
            <Select.Viewport className='p-[0.8rem]'>
              {CARD_OPTIONS.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default CardSelector;
