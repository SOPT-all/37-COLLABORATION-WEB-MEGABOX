import { useEffect, useState } from 'react'
import { cn } from '@utils/cn';
import Tooltip from '@components/tooltip/Tooltip';

const formatAmount = (amount: number) => amount.toLocaleString('ko-KR');

interface PaymentButtonProps {
  totalAmount: number;
  isDisabled?: boolean;
  handleClick: () => void;
  showTooltip?: boolean;
}

const PaymentButton = ({
  totalAmount,
  isDisabled = false,
  handleClick,
  showTooltip = false,
}: PaymentButtonProps) => {
  const tooltipMessage = '할인된 금액이에요!';
  const [isTooltip, setIsTooltip] = useState(false);

  const handleCloseTooltip = () => {
    setIsTooltip(false);
  };

  useEffect(() => {
    if (showTooltip) {
      setIsTooltip(true);
    }
  }, [showTooltip]);

  return (
    <div className='relative'>
      {isTooltip && (
        <div className='absolute -top-[2.5rem] right-[7rem]'>
          <Tooltip
            message={tooltipMessage}
            handleClose={handleCloseTooltip}
          />
        </div>
      )}
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
    </div>
  );
};

export default PaymentButton;
