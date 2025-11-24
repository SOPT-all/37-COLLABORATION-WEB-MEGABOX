import type { ShowtimeResponse } from 'apis/data-contracts';
import { Time } from '@pages/movie-reservation/components/index';

interface TheaterProps {
  cinemaName: string;
  movieTitle: string;
  theaterName: string;
  screenType: string;
  showtimes: ShowtimeResponse[];
  handleOpenModal: (_: boolean) => void;
}

export default function Theater({
  cinemaName,
  movieTitle,
  theaterName,
  screenType,
  showtimes,
  handleOpenModal,
}: TheaterProps) {
  return (
    <>
      <div className='flex justify-between'>
        <span className='font-label2 text-gray-0'>{theaterName}</span>
        <span className='font-label2 text-gray-500'>{screenType}</span>
      </div>
      <div className='flex flex-wrap gap-[0.9rem]'>
        {showtimes?.map(showtime => (
          <Time
            key={showtime.showtimeId}
            cinemaName={cinemaName}
            movieTitle={movieTitle}
            theaterName={theaterName}
            screenType={screenType}
            showtimeId={showtime.showtimeId ?? 0}
            startTime={showtime.startTime ?? ''}
            endTime={showtime.endTime ?? ''}
            availableSeatCount={showtime.availableSeatCount ?? 0}
            totalSeatCount={showtime.totalSeatCount ?? 0}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </div>
    </>
  );
}
