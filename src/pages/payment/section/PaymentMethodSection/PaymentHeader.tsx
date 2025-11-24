import { cn } from "@utils/cn"
import UppArrow from '@assets/components/IconSystemUparrow';

interface PaymentHeaderProps {
  activeTab: boolean;
  handleToggle: () => void
}

const PaymentHeader = ({ activeTab, handleToggle }: PaymentHeaderProps) => {
  return (
    <div className={cn('flex items-center justify-between', activeTab ? 'mb-[2.5rem]' : 'mb-0')}>
      <h2 className='font-title2'>결제 수단</h2>
      <button
        type='button'
        onClick={handleToggle}
        className='flex items-center gap-[0.9rem]'
        aria-label={activeTab ? '결제 수단 선택 닫기' : '결제 수단 선택 열기'}
      >
        <span className='font-caption1 text-gray-400'>신용/체크카드</span>
        <UppArrow
          width={14}
          height={14}
          className={cn(
            'text-gray-300',
            'transition-transform',
            !activeTab && 'rotate-180'
          )}
        />
      </button>
    </div>
  );
};

export default PaymentHeader;