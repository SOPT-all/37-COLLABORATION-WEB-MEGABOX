import { cn } from '@utils/cn';
import { COUPON_ITEMS } from '@pages/payment/constants/discount';
import { Button } from '@components/index';
import IconCheckFill from '@assets/components/IconCheckFill';

interface CouponGridProps {
  selectedCoupon: string | null;
  selectedPolicy: boolean;
  handleSelectedCoupon: (coupon: string) => void;
  handleSelectedPolicy: (policy: boolean) => void;
}

export default function CouponGrid({
  selectedCoupon,
  selectedPolicy,
  handleSelectedCoupon,
  handleSelectedPolicy,
}: CouponGridProps) {
  console.info('selectedCoupon in CouponGrid', selectedCoupon);
  return (
    <section className='rounded-[0.4rem] bg-gray-100 px-[1.5rem] py-[1.2rem]'>
      <div className='grid grid-cols-2 gap-[0.8rem]'>
        {COUPON_ITEMS.map(item => (
          <Button
            key={item.key}
            variant='primary'
            onClick={() => handleSelectedCoupon(selectedCoupon === item.key ? '' : item.key)}
            className={cn(
              'font-button1 bg-gray-0 rounded-[0.4rem] border-[0.1rem] px-[1rem] py-[1.2rem]',
              selectedCoupon === item.key
                ? 'border-violet-600 text-violet-600'
                : 'border-gray-200 text-gray-500'
            )}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div className='flex items-center justify-between mt-[0.8rem] mb-[0.8rem]'>
        <div className='flex items-center gap-[0.6rem]'>
          <button
            type='button'
            onClick={() => handleSelectedPolicy(!selectedPolicy)}
            className='flex items-center'
            aria-label='할인 쿠폰 자동 적용'
          >
            <IconCheckFill
              width={18}
              height={18}
              className={cn(
                selectedPolicy ? 'text-violet-600' : 'text-gray-300'
              )}
            />
          </button>
          <span
            className='font-caption2 text-gray-800 cursor-pointer'
            onClick={() => handleSelectedPolicy(!selectedPolicy)}
          >
            할인 쿠폰 자동 적용
          </span>
        </div>
        <span className='font-label2 text-gray-300'>적용 쿠폰 확인</span>
      </div>
      <span className='font-caption1 text-gray-400'>
        기프트콘, 기프티쇼, 아이넘버, 도넛북, 스마트콘, 스마일콘, G마켓 예매권은 [모바일 관람권]에서 사용하실 수 있습니다.
      </span>
    </section>
  );
}
