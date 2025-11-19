import { useState } from 'react'
import { cn } from "@utils/cn";

type TabType = 'coupon' | 'point';

export const DiscountSection = () => {
  const [activeTab, setActiveTab] = useState<TabType | null>(null);

  const getTabClassName = (isActive: boolean) =>
    cn(
      'font-button2 relative flex-1 rounded-[0.4rem] border-[0.1rem] p-[1rem]',
      isActive
        ? 'border-violet-600 text-violet-600'
        : 'border-gray-300 text-gray-900'
    );

  return (
    <section className='bg-white p-[1.6rem]'>
      <div className='mb-[2.5rem] flex items-center justify-between'>
        <h2 className='font-title2'>할인적용</h2>
        <span className='font-caption1 text-gray-400'>
          할인 수단을 선택하세요
        </span>
      </div>
      {/* 탭 버튼 */}
      <div className='mb-[1.8rem] flex gap-[0.7rem]'>
        <button
          onClick={() => setActiveTab('coupon')}
          className={getTabClassName(activeTab === 'coupon')}
        >
          쿠폰/관람권/기타
        </button>
        <button
          onClick={() => setActiveTab('point')}
          className={getTabClassName(activeTab === 'point')}
        >
          포인트
        </button>
      </div>
      {/* 탭 내용 */}
      <div>
        {activeTab === 'coupon' && <div>쿠폰 탭 내용</div>}
        {activeTab === 'point' && <div>포인트 탭 내용</div>}
      </div>
    </section>
  );
}

export default DiscountSection
