import { cn } from '@utils/cn';
import IconCard from '@assets/components/IconCard';
import IconSimpleCard from '@assets/components/IconSimpleCard';
import Phone from '@assets/components/IconPhone';
import MyCard from '@assets/components/IconMyCard';
import type { PaymentFormData } from '@pages/payment/schemas/payment.schema';

type PaymentMethodType = NonNullable<PaymentFormData['selectedPaymentMethod']>;

interface PaymentGridProps {
  selectedMethod: PaymentFormData['selectedPaymentMethod'];
  handleSelect: (_method: PaymentMethodType) => void;
}

const PAYMENT_METHODS = [
  { id: 'credit-card' as const, label: '신용카드', icon: IconCard },
  { id: 'simple-pay' as const, label: '간편결제', icon: IconSimpleCard },
  { id: 'phone-pay' as const, label: '휴대폰결제', icon: Phone },
  { id: 'account-pay' as const, label: '내통장결제', icon: MyCard },
];

const PaymentGrid = ({ selectedMethod, handleSelect }: PaymentGridProps) => {
  const handleClick = (method: PaymentMethodType) => {
    handleSelect(method);
  };
  return (
    <div className='mb-[2rem] grid grid-cols-2 gap-[1.2rem]'>
      {PAYMENT_METHODS.map(method => {
        const Icon = method.icon;
        return (
          <button
            key={method.id}
            type='button'
            onClick={() => handleClick(method.id)}
            className={cn(
              'relative z-10 flex flex-col items-center gap-[1.2rem] overflow-hidden rounded-[0.4rem] border px-[1rem] py-[1.2rem]',
              selectedMethod === method.id
                ? 'border-violet-600'
                : 'border-gray-300'
            )}
          >
            {/* 간편결제 예택 뱃지 */}
            {method.id === 'simple-pay' && (
              <span className='bg-blueGreen-500 font-label1 text-gray-0 absolute top-[-0.1rem] left-[-0.1rem] z-0 rounded-[0.4rem] px-[0.3rem] py-[0.2rem]'>
                혜택
              </span>
            )}
            <Icon
              width={30}
              height={30}
              className={cn(
                selectedMethod === method.id
                  ? 'text-violet-600'
                  : 'text-gray-700'
              )}
            />
            <span
              className={cn(
                'font-button2',
                selectedMethod === method.id
                  ? 'text-violet-600'
                  : 'text-gray-700'
              )}
            >
              {method.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default PaymentGrid;
