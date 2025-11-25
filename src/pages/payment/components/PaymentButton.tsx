import { cn } from '@utils/cn';

interface PaymentBtnProps {
  totalAmount: number;
  disabled?: boolean;
}

export default function PaymentButton({
  totalAmount,
  disabled = false,
}: PaymentBtnProps) {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString('ko-KR');
  };

  return (
    <button
      type='submit'
      disabled={disabled}
      className={cn(
        'font-button4 w-full px-[3.2rem] py-[1.6rem] text-white transition-colors',
        disabled ? 'bg-gray-800 cursor-not-allowed' : 'bg-violet-600'
      )}
    >
      {`${formatAmount(totalAmount)}원 결제하기`}
    </button>
  );
}
