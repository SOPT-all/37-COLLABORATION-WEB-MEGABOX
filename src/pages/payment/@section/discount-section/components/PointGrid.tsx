import { useState } from 'react';
import { cn } from '@utils/cn';
import { POINT_ITEMS } from '@pages/payment/constants/discount';
import type { PaymentFormData } from '@pages/payment/schemas/payment.schema';
import { Button } from '@components/index';
import Tooltip from '@components/tooltip/Tooltip';

interface PointGridProps {
  selectedPoint: PaymentFormData['selectedPoint'];
  handleSelectedPoint: (_point: PaymentFormData['selectedPoint']) => void;
}

export default function PointGrid({
  selectedPoint,
  handleSelectedPoint,
}: PointGridProps) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  const handleCloseTooltip = () => {
    setIsTooltipOpen(false);
  };

  return (
    <div className='rounded-[0.4rem] bg-gray-100 px-[1.5rem] py-[1.2rem] grid grid-cols-2 gap-[0.8rem]'>
      {POINT_ITEMS.map((item, index) => (
        <div
          key={item.key}
          className={cn('relative', index === 0 && 'col-span-2')}
        >
          <Button
            variant='primary'
            onClick={() =>
              handleSelectedPoint(selectedPoint === item.key ? null : item.key)
            }
            className={cn(
              'font-button1 bg-gray-0 rounded-[0.4rem] border-[0.1rem] px-[1rem] py-[1.2rem] w-full',
              selectedPoint === item.key
                ? 'border-violet-600 text-violet-600'
                : 'border-gray-200 text-gray-500'
            )}
          >
            {item.label}
          </Button>
          {index === 1 && isTooltipOpen && (
            <div className='absolute bottom-full left-[1rem] mb-[0rem] '>
              <Tooltip
                message='최근 사용한 할인수단!'
                handleClose={handleCloseTooltip}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
