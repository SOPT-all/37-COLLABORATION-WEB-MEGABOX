import type { ShowtimeResponse } from 'apis/data-contracts';
import { Time } from '@pages/movie-reservation/components/index';
import { type ShowtimeDetail } from '@pages/movie-reservation/types/index';

interface TheaterProps {
  movieTitle: string;
  theaterName: string;
  screenType: string;
  showtimes: ShowtimeResponse[];
  handleSelectShowtime: (_: ShowtimeDetail) => void;
  handleOpenModal: (_: boolean) => void;
}

export default function Theater({
  movieTitle,
  theaterName,
  screenType,
  showtimes,
  handleSelectShowtime,
  handleOpenModal,
}: TheaterProps) {
  return (
    <div className='flex flex-col gap-[0.9rem]'>
      <div className='flex justify-between'>
        <span className='font-label2 text-gray-0'>{theaterName}</span>
        <span className='font-label2 text-gray-500'>{screenType}</span>
      </div>
      <div className='flex flex-wrap gap-[0.9rem]'>
        {showtimes?.map(showtime => (
          <Time
            key={showtime.showtimeId}
            movieTitle={movieTitle}
            showtimeId={showtime.showtimeId ?? 0}
            startTime={showtime.startTime ?? ''}
            endTime={showtime.endTime ?? ''}
            availableSeatCount={showtime.availableSeatCount ?? 0}
            totalSeatCount={showtime.totalSeatCount ?? 0}
            handleSelectShowtime={handleSelectShowtime}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </div>
    </div>
  );
}
