import { cn } from '@utils/cn';

const formatAmount = (amount: number) => amount.toLocaleString('ko-KR');

interface PaymentButtonProps {
  totalAmount: number;
  isDisabled?: boolean;
  handleClick: () => void;
}

const PaymentButton = ({ totalAmount, isDisabled = false, handleClick }: PaymentButtonProps) => {
  return (
    <button
      type='button'
      onClick={handleClick}
      className={cn(
        'font-button4 w-full px-[3.2rem] py-[1.6rem] text-white transition-colors',
        isDisabled ? 'bg-gray-800 cursor-not-allowed' : 'bg-violet-600'
      )}
    >
      {`${formatAmount(totalAmount)}원 결제하기`}
    </button>
  );
};

export default PaymentButton;
