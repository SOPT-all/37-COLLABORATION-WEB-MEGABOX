import {useController, type UseFormReturn } from 'react-hook-form';
import type { DiscountFormData } from '@pages/Payment/schemas/payment.schema';
import { cn } from '@utils/cn';
import DiscountGrid from '../section/DiscountSection/DiscountGrid';
import { COUPON_ITEMS, POINT_ITEMS } from '@constants/discount';
import IconCheckFill from '@assets/components/IconCheckFill';
import UppArrow from '@assets/components/IconSystemUparrow';

interface DiscountSectionProps {
  form: UseFormReturn<DiscountFormData>;
}

export const DiscountSection = ({ form }: DiscountSectionProps) => {
  // 탭 컨트롤러
  const {
    field: { value: activeTab, onChange: onTabChange },
  } = useController({
    name: 'activeTab',
    control: form.control,
  });

  // 그리드 아이템 컨트롤러
  const {
    field: { value: selectedDiscountId, onChange: onDiscountChange },
  } = useController({
    name: 'selectedDiscountId',
    control: form.control,
  });

  // 체크박스 컨트롤러
  const {
    field: {value: isChecked, onChange: onCheckedChange},
  } = useController({
    name: 'isChecked',
    control: form.control,
  })

  const getTabClassName = (isActive: boolean) =>
    cn(
      'font-button2 relative flex-1 rounded-[0.4rem] border-[0.1rem] p-[1rem]',
      isActive
        ? 'font-button3 border-violet-600 text-violet-600 before:absolute before:bottom-[-0.5rem] before:left-1/2 before:-translate-x-1/2 before:h-[0.9rem] before:w-[0.9rem] before:rotate-45 before:border-b-[0.1rem] before:border-r-[0.1rem] before:border-violet-600 before:rounded-br-[0.2rem] before:bg-white'
        : 'border-gray-300 text-gray-900'
    );

  return (
    <section className='bg-white p-[1.6rem]' aria-labelledby='할인 세션'>
      <div className='mb-[2.5rem] flex items-center justify-between'>
        <h2 id='할인 타이틀' className='font-title2'>
          할인적용
        </h2>
        <div>
          <button
            type='button'
            onClick={() => {
              if (activeTab) {
                onTabChange(null);
              }
            }}
            className='flex items-center gap-[0.9rem]'
            aria-label={
              activeTab ? '할인 수단 선택 닫기' : '할인 수단 선택 열기'
            }
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
      {/* 탭 버튼 */}
      <div
        className='mb-[1.8rem] flex gap-[0.7rem]'
        aria-label='할인 수단 종류'
      >
        <button
          type='button'
          onClick={() => onTabChange(activeTab === 'coupon' ? null : 'coupon')}
          className={getTabClassName(activeTab === 'coupon')}
          role='tab'
          aria-selected={activeTab === 'coupon'}
        >
          쿠폰/관람권/기타
        </button>
        <button
          type='button'
          // onClick={() => handleTabChange('point')}
          onClick={() => onTabChange(activeTab === 'point' ? null : 'point')}
          className={getTabClassName(activeTab === 'point')}
          role='tab'
          aria-selected={activeTab === 'point'}
        >
          포인트
        </button>
      </div>
      {/* 탭 내용 */}
      <div role='tabpanel' aria-labelledby='coupon-tab'>
        {activeTab === 'coupon' && (
          <DiscountGrid
            items={COUPON_ITEMS}
            selectedId={selectedDiscountId}
            onSelect={onDiscountChange}
            firstItem={false}
          >
            <div className='mt-[0.8rem] flex items-center justify-between py-[0.5rem]'>
              <div className='flex items-center gap-[0.6rem]'>
                <button
                  type='button'
                  onClick={() => {
                    onCheckedChange(!isChecked);
                  }}
                  className='flex items-center gap-[0.6rem]'
                  role='checkbox'
                  aria-label='할인 쿠폰 자동 적용'
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
                  <label
                    className='font-caption2 cursor-pointer text-gray-800'
                    aria-label='적용된 쿠폰 확인하기'
                  >
                    할인 쿠폰 자동 적용
                  </label>
                </button>
              </div>
              <button
                type='button'
                className='font-label2 whitespace-nowrap text-gray-300'
              >
                적용 쿠폰 확인
              </button>
            </div>

            <ul className='mt-[0.8rem] list-disc pl-[1.6rem]'>
              <li className='font-caption1 text-gray-400'>
                기프트콘, 기프티쇼, 아이넘버, 도너블, 스마트콘, 스마일콘, G마켓
                예매권은 [모바일 관람권]에서 사용하실 수 있습니다.
              </li>
            </ul>
          </DiscountGrid>
        )}
        {activeTab === 'point' && (
          <DiscountGrid
            items={POINT_ITEMS}
            selectedId={selectedDiscountId}
            onSelect={onDiscountChange}
            firstItem={true}
          />
        )}
      </div>
    </section>
  );
};

export default DiscountSection;
