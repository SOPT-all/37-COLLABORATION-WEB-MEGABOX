import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { CARD_OPTIONS } from '@pages/payment/constants/pay';
import type { PaymentFormData } from '@pages/payment/schemas/payment.schema';

interface CardDropdownProps {
  selectedCard: PaymentFormData['selectedCard'];
  handleSelect: (_card: NonNullable<PaymentFormData['selectedCard']>) => void;
}

export default function CardDropdown({
  selectedCard,
  handleSelect,
}: CardDropdownProps) {
  return (
    <div className='mb-[1rem]'>
      <Select.Root
        value={selectedCard || ''}
        onValueChange={value => {
          if (value) {
            handleSelect(value as NonNullable<PaymentFormData['selectedCard']>);
          }
        }}
      >
        <Select.Trigger className='font-button2 flex w-full items-center justify-between rounded-[0.4rem] border border-gray-300 px-[1rem] py-[1.2rem]'>
          <Select.Value placeholder='카드 선택하기' />
          <Select.Icon>
            <ChevronDownIcon className='text-gray-300' />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            className='min-w-[30rem] mx-auto bg-gray-0 rounded-[0.8rem] border border-gray-300 shadow-lg'
            position='popper'
            sideOffset={5}
          >
            <Select.Viewport className='p-[0.8rem]'>
              {CARD_OPTIONS.map(option => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className='font-button2 cursor-pointer rounded-[0.4rem] px-[1rem] py-[0.8rem] text-gray-700 outline-none hover:bg-gray-100 focus:bg-gray-100 data-[highlighted]:bg-gray-100'
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

