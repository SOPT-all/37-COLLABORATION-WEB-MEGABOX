import dayjs from 'dayjs';
import { cn } from '@utils/cn';
import { Chip } from '@pages/movie-reservation/components/index';
import { type Date } from '@pages/movie-reservation/types/date';

import { type ShowtimeReadRequest } from 'apis/data-contracts';

interface DateChipsProps {
  dates: Date[];
  selectedDate: Date;
  handleClickDate: (_: Date) => void;
  movieIds: number[];
  timeSlot: ShowtimeReadRequest['timeSlot'];
  prefetchShowtimes: (_: ShowtimeReadRequest) => void;
}

export default function DateChips({
  dates,
  selectedDate,
  handleClickDate,
  movieIds,
  timeSlot,
  prefetchShowtimes,
}: DateChipsProps) {
  return (
    <div className='scrollbar-hide flex w-full gap-[0.7rem] overflow-x-scroll px-[0.5rem]'>
      {dates.map((dateInfo, idx) => {
        const dayColorClass = cn(
          dateInfo.day === '토' && 'text-blue-500',
          dateInfo.day === '일' && 'text-red-500'
        );
        const dateString = dayjs(dateInfo.date).format('D');

        return (
          <Chip
            key={idx}
            variant='date'
            isSelected={selectedDate.date === dateInfo.date}
            onClick={() => handleClickDate(dateInfo)}
            onMouseEnter={() => {
              console.log('hi');
              prefetchShowtimes({
                movieIds,
                date: dateInfo.date,
                timeSlot,
              })
            }}
          >
            <span className={cn('font-title3', dayColorClass)}>
              {dateString}
            </span>
            <span className={cn('font-label1', dayColorClass)}>
              {dateInfo.day}
            </span>
          </Chip>
        );
      })}
    </div>
  );
}