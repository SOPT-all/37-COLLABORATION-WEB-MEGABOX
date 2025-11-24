import DiscountGrid from '@pages/payment/section/DiscountSection/DiscountGrid';
import { COUPON_ITEMS, POINT_ITEMS } from '@/pages/payment/contants/discount';
import IconCheckFill from '@assets/components/IconCheckFill';
import type { DiscountFormData } from '@pages/payment/schemas/payment.schema';

interface DiscountContentProps {
  activeTab: DiscountFormData['activeTab'];
  selectedDiscountId: DiscountFormData['selectedDiscountId'];
  isChecked: DiscountFormData['isChecked'];
  handleDiscountChange: (_id: DiscountFormData['selectedDiscountId']) => void;
  handleCheckedChange: (_checked: boolean) => void;
}

export const DiscountContent = ({
  activeTab,
  selectedDiscountId,
  handleDiscountChange,
  isChecked,
  handleCheckedChange,
}: DiscountContentProps) => {
  return (
    <div role='tabpanel' aria-labelledby='coupon-tab'>
      {activeTab === 'coupon' && (
        <DiscountGrid
          items={COUPON_ITEMS}
          selectedId={selectedDiscountId}
          handleSelect={handleDiscountChange}
          firstItem={false}
        >
          <div className='mt-[0.8rem] flex items-center justify-between py-[0.5rem]'>
            <div className='flex items-center gap-[0.6rem]'>
              <button
                type='button'
                onClick={() => {
                  handleCheckedChange(!isChecked);
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
          handleSelect={handleDiscountChange}
          firstItem={true}
        />
      )}
    </div>
  );
};

export default DiscountContent;
