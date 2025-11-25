import { cn } from '@utils/cn';
import { POINT_ITEMS } from '@pages/payment/constants/discount';
import { Button } from '@components/index';

interface PointGridProps {
  selectedPoint: string | null;
  handleSelectedPoint: (point: string) => void;
}

export default function PointGrid({
  selectedPoint,
  handleSelectedPoint,
}: PointGridProps) {
  console.info('selectedPoint in PointGrid', selectedPoint);
  return (
    <div className='grid grid-cols-2 gap-[0.8rem]'>
      {POINT_ITEMS.map(item => (
        <Button
          key={item.key}
          variant='primary'
          onClick={() => handleSelectedPoint(item.key)}
          className={cn(
            'font-button1 bg-gray-0 rounded-[0.4rem] border-[0.1rem] px-[1rem] py-[1.2rem]',
            selectedPoint === item.key
              ? 'border-violet-600 text-violet-600'
              : 'border-gray-200 text-gray-500'
          )}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
}
