import { cn } from '@utils/cn';
import UppArrow from '@assets/components/IconSystemUparrow';

interface DiscountHeaderProps {
  activeTab: 'coupon' | 'point' | null;
  onToggle: () => void;
}

export const DiscountHeader = ({
  activeTab,
  onToggle,
}: DiscountHeaderProps) => {
  return (
    <div className='mb-[2.5rem] flex items-center justify-between'>
      <h2 id='할인 타이틀' className='font-title2'>
        할인적용
      </h2>
      <div>
        <button
          type='button'
          onClick={onToggle}
          className='flex items-center gap-[0.9rem]'
          aria-label={activeTab ? '할인 수단 선택 닫기' : '할인 수단 선택 열기'}
        >
          <span className='font-caption1 text-gray-400'>
            할인 수단을 선택하세요
          </span>
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
    </div>
  );
};

export default DiscountHeader;