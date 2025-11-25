import { cn } from '@utils/cn';

interface DiscountTabsProps {
  activeTab: 'coupon' | 'point';
  isOpen: boolean;
  handleTabChange: (_tab: 'coupon' | 'point') => void;
}

export default function DiscountTabs({
  activeTab,
  isOpen,
  handleTabChange,
}: DiscountTabsProps) {
  const getTabClassName = (isActive: boolean) =>
    cn(
      'font-button2 relative flex-1 rounded-[0.4rem] border-[0.1rem] p-[1rem]',
      isActive && isOpen
        ? 'font-button3 border-violet-600 text-violet-600 before:absolute before:bottom-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:h-[0.9rem] before:w-[0.9rem] before:rotate-45 before:border-b-[0.1rem] before:border-r-[0.1rem] before:border-violet-600 before:rounded-br-[0.2rem] before:bg-gray-0'
        : 'border-gray-300 text-gray-900'
    );

  return (
    <div className={cn('flex gap-[0.7rem]', isOpen && 'mb-[1.8rem]')} aria-label='할인 수단 종류'>
      <button
        type='button'
        onClick={() => handleTabChange('coupon')}
        className={getTabClassName(activeTab === 'coupon')}
        role='tab'
        aria-selected={activeTab === 'coupon' && isOpen}
      >
        쿠폰/관람권/기타
      </button>
      <button
        type='button'
        onClick={() => handleTabChange('point')}
        className={getTabClassName(activeTab === 'point')}
        role='tab'
        aria-selected={activeTab === 'point' && isOpen}
      >
        포인트
      </button>
    </div>
  );
}
