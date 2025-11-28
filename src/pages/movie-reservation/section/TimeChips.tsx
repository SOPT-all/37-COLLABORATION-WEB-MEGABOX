import { TIMES, type TimeType } from '@pages/movie-reservation/constants/index';
import { Chip } from '@pages/movie-reservation/components/index';
import type { PrefetchConfig } from '@pages/movie-reservation/types/index';

interface TimeChipsProps {
  selectedTimeId: number | null;
  handleClickTime: (_: number) => void;
  prefetchConfig: PrefetchConfig;
}

export default function TimeChips({
  selectedTimeId,
  handleClickTime,
  prefetchConfig,
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
            onMouseEnter={() => {
              prefetchConfig.prefetchShowtimes(prefetchConfig.queryClient, {
                movieIds: prefetchConfig.movieIds,
                date: prefetchConfig.date,
                timeSlot: TIMES[idx].type as TimeType
              })
            }}
          >
            {TIMES[idx].label}
          </Chip>
        );
      })}
    </div>
  );
}