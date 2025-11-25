import { cn } from '@utils/cn';
import { COUPON_ITEMS } from '@pages/payment/constants/discount';
import { Button } from '@components/index';

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
    <div className='rounded-[0.4rem] bg-gray-100 px-[1.5rem] py-[1.2rem]'>
      {COUPON_ITEMS.map(item => (
        <Button
          key={item.key}
          variant='primary'
          onClick={() => handleSelectedCoupon(item.key)}
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
      <div className='flex items-center gap-[0.8rem]'>
        <input
          type='checkbox'
          id='selectedPolicy'
          checked={selectedPolicy}
          onChange={() => handleSelectedPolicy(!selectedPolicy)}
        />
      </div>
    </div>
  );
}
