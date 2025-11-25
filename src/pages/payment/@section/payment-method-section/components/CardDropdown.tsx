import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { CARD_OPTIONS } from '@pages/payment/constants/pay';

interface CardDropdownProps {
  selectedCard: string | null;
  handleSelect: (card: string) => void;
}

export default function CardDropdown({
  selectedCard,
  handleSelect,
}: CardDropdownProps) {
  return (
    <div className='mb-[1rem]'>
      <Select.Root value={selectedCard || ''} onValueChange={handleSelect}>
        <Select.Trigger className='font-button2 flex w-full items-center justify-between rounded-[0.4rem] border border-gray-300 px-[1rem] py-[1.2rem]'>
          <Select.Value placeholder='카드 선택하기' />
          <Select.Icon>
            <ChevronDownIcon className='text-gray-300' />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className='bg-gray-0 overflow-hidden rounded-[0.8rem] border border-gray-300 shadow-lg'>
            <Select.Viewport className='p-[0.8rem]'>
              {CARD_OPTIONS.map(option => (
                <Select.Item key={option.value} value={option.value}>
                  {option.label}
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

