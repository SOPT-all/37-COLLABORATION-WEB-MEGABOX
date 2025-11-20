import { useState } from 'react'
import { cn } from "@utils/cn";
import DiscountGrid from './DiscountGrid';
import { COUPON_ITEMS, POINT_ITEMS } from '@constants/discount';
import IconCheckFill from '@assets/components/IconCheckFill'
import UppArrow from "@assets/components/IconSystemUparrow"

type TabType = 'coupon' | 'point';

export const DiscountSection = () => {
  const [activeTab, setActiveTab] = useState<TabType | null>(null);
  const [selectedDiscountId, setSelectedDiscountId] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const getTabClassName = (isActive: boolean) =>
    cn(
      'font-button2 relative flex-1 rounded-[0.4rem] border-[0.1rem] p-[1rem]',
      isActive
        ? 'font-button3 border-violet-600 text-violet-600'
        : 'border-gray-300 text-gray-900'
    );

  return (
    <section className='bg-white p-[1.6rem]'>
      <div className='mb-[2.5rem] flex items-center justify-between'>
        <h2 className='font-title2'>할인적용</h2>
        <div className='flex items-center gap-[0.9rem]'>
          <span className='font-caption1 text-gray-400'>
            할인 수단을 선택하세요
          </span>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            <UppArrow
              width={14}
              height={14}
              className={cn(
                'text-gray-300',
                'transition-transform',
                !isExpanded && 'rotate-180'
              )}
            />
          </button>
        </div>
      </div>
      {/* 탭 버튼 */}
      <div className='mb-[1.8rem] flex gap-[0.7rem]'>
        <button
          onClick={() => setActiveTab(activeTab === 'coupon' ? null : 'coupon')}
          className={getTabClassName(activeTab === 'coupon')}
        >
          쿠폰/관람권/기타
        </button>
        <button
          onClick={() => setActiveTab(activeTab === 'point' ? null : 'point')}
          className={getTabClassName(activeTab === 'point')}
        >
          포인트
        </button>
      </div>
      {/* 탭 내용 */}
      {isExpanded && (
        <div>
          {activeTab === 'coupon' && (
            <DiscountGrid
              items={COUPON_ITEMS}
              selectedId={selectedDiscountId}
              onSelect={setSelectedDiscountId}
              firstItem={false}
            >
              <div className='mt-[0.8rem] flex items-center justify-between py-[0.5rem]'>
                <div className='flex items-center gap-[0.6rem]'>
                  <button
                    onClick={() => {
                      setIsChecked(!isChecked);
                    }}
                  >
                    <IconCheckFill
                      width={18}
                      height={18}
                      className={
                        isChecked
                          ? 'text-violet-600 transition-colors'
                          : 'text-gray-300 transition-colors'
                      }
                    />
                  </button>
                  <label className='font-caption2 cursor-pointer text-gray-800'>
                    할인 쿠폰 자동 적용
                  </label>
                </div>
                <button className='font-label2 whitespace-nowrap text-gray-300'>
                  적용 쿠폰 확인
                </button>
              </div>

              <ul className='mt-[0.8rem] list-disc pl-[1.6rem]'>
                <li className='font-caption1 text-gray-400'>
                  기프트콘, 기프티쇼, 아이넘버, 도너블, 스마트콘, 스마일콘,
                  G마켓 예매권은 [모바일 관람권]에서 사용하실 수 있습니다.
                </li>
              </ul>
            </DiscountGrid>
          )}
          {activeTab === 'point' && (
            <DiscountGrid
              items={POINT_ITEMS}
              selectedId={selectedDiscountId}
              onSelect={setSelectedDiscountId}
              firstItem={true}
            />
          )}
        </div>
      )}
    </section>
  );
}

export default DiscountSection
