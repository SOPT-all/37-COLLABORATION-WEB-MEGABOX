import { cn } from '@utils/cn';
import { PAYMENT_METHODS } from '@pages/payment/constants/pay';
import type { PaymentMethodType } from '@pages/payment/constants/pay';
import IconCard from '@assets/components/IconCard';
import IconSimpleCard from '@assets/components/IconSimpleCard';
import IconMyCard from '@assets/components/IconMyCard';

interface PaymentGridProps {
  selectedPaymentMethod: PaymentMethodType | null;
  handleSelect: (method: PaymentMethodType) => void;
}

const PAYMENT_ICONS = {
  'credit-card': IconCard,
  'simple-pay': IconSimpleCard,
  'account-pay': IconMyCard,
} as const;

export default function PaymentGrid({
  selectedPaymentMethod,
  handleSelect,
}: PaymentGridProps) {
  return (
    <div className='mb-[2rem] grid grid-cols-2 gap-[1.2rem]'>
      {PAYMENT_METHODS.map(method => {
        const Icon = PAYMENT_ICONS[method.key];
        const isSelected = selectedPaymentMethod === method.key;

        return (
          <button
            key={method.key}
            type='button'
            onClick={() => handleSelect(method.key)}
            className={cn(
              'relative z-10 flex flex-col items-center gap-[1.2rem] overflow-hidden rounded-[0.4rem] border px-[1rem] py-[1.2rem]',
              isSelected ? 'border-violet-600' : 'border-gray-300'
            )}
          >
            {/* 간편결제 예택 뱃지 */}
            {method.key === 'simple-pay' && (
              <span className='bg-blueGreen-500 font-label1 text-gray-0 absolute top-[-0.1rem] left-[-0.1rem] z-0 rounded-[0.4rem] px-[0.3rem] py-[0.2rem]'>
                혜택
              </span>
            )}
            <Icon
              width={30}
              height={30}
              className={cn(isSelected ? 'text-violet-600' : 'text-gray-700')}
            />
            <span
              className={cn(
                'font-button2',
                isSelected ? 'text-violet-600' : 'text-gray-700'
              )}
            >
              {method.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
