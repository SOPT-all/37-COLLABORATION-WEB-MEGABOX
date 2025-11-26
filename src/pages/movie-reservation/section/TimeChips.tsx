import { TIMES } from '@pages/movie-reservation/constants/index';
import { Chip } from '@pages/movie-reservation/components/index';

interface TimeChipsProps {
  selectedTimeId: number | null;
  handleClickTime: (_: number) => void;
}

export default function TimeChips({
  selectedTimeId,
  handleClickTime
}: TimeChipsProps) {
  return (
    <div className='scrollbar-hide flex w-full items-start gap-[0.8rem] overflow-x-scroll py-[1rem] opacity-70'>
      {TIMES.map((_, idx) => {
        return (
          <Chip
            key={idx}
            variant='time'
            isSelected={selectedTimeId === idx}
            onClick={() => handleClickTime(idx)}
          >
            {TIMES[idx].label}
          </Chip>
        );
      })}
    </div>
  );
}