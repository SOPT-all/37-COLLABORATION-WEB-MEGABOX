import { TIMES, type TimeType } from '@pages/movie-reservation/constants/index';
import { Chip } from '@pages/movie-reservation/components/index';

import { type Date } from '@pages/movie-reservation/types/date';
import { type ShowtimeReadRequest } from 'apis/data-contracts';

interface TimeChipsProps {
  selectedTimeId: number | null;
  handleClickTime: (_: number) => void;
  movieIds: number[];
  selectedDate: Date;                                  // ⭐ 추가
  prefetchShowtimes: (_: ShowtimeReadRequest) => void;
}

export default function TimeChips({
  selectedTimeId,
  handleClickTime,
  movieIds,
  selectedDate,
  prefetchShowtimes
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
              console.log('hi');
              prefetchShowtimes({
                movieIds,
                date: selectedDate.date,
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