import { cn } from "@utils/cn"
import UppArrow from '@assets/components/IconSystemUparrow';

interface PaymentHeaderProps {
  activeTab: boolean;
  onToggle: () => void
}

const PaymentHeader = ({ activeTab, onToggle }: PaymentHeaderProps) => {
  return (
    <div className='mb-[2.5rem] flex items-center justify-between'>
      <h2 className='font-title2'>결제 수단</h2>
      <button onClick={onToggle} className='flex items-center gap-[0.9rem]'>
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

export default PaymentHeader
