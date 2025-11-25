import { Cinema, Movie, Theater } from '@pages/movie-reservation/components/index';
import { type CinemaResponse } from 'apis/data-contracts';
import { type ShowtimeDetail } from '@pages/movie-reservation/types/index';

interface ScheduleProps {
  filteredShowtimes: CinemaResponse[];
  showtimeOpenMap: Record<string, boolean>;
  handleOpenShowtime: (_: string, __: boolean) => void;
  handleOpenChange: (_: boolean) => void;
  handleSelectShowtime: (_: ShowtimeDetail) => void;
}

export default function Schedule({
  filteredShowtimes,
  showtimeOpenMap,
  handleOpenShowtime,
  handleOpenChange,
  handleSelectShowtime
}: ScheduleProps) {
  return (
    <div className='flex w-full flex-col gap-[2.2rem]'>
      {filteredShowtimes.map(cinema => (
        <div
          key={cinema.cinemaName}
          className='flex w-full flex-col gap-[2.2rem]'
        >
          <Cinema
            key={cinema.cinemaName}
            cinemaName={cinema.cinemaName ?? ''}
            isShowtimeOpen={showtimeOpenMap[cinema.cinemaName ?? ''] ?? true}
            handleOpenShowtime={isOpen =>
              handleOpenShowtime(cinema.cinemaName ?? '', isOpen)
            }
          />
          {showtimeOpenMap[cinema.cinemaName ?? ''] &&
            cinema.movies?.map(movie => (
              <div
                key={`${cinema.cinemaName} - ${movie.movieTitle}`}
                className='flex flex-col gap-[2rem]'
              >
                <Movie
                  key={`${cinema.cinemaName} - ${movie.movieTitle}`}
                  movieTitle={movie.movieTitle || ''}
                  ageRating={12}
                />
                {movie.theaters?.map(theater => (
                  <Theater
                    key={`${cinema.cinemaName} - ${movie.movieTitle} - ${theater.theaterName}`}
                    theaterName={theater.theaterName ?? ''}
                    screenType={theater.screenType ?? ''}
                    showtimes={theater.showtimes ?? []}
                    movieTitle={movie.movieTitle ?? ''}
                    handleOpenModal={handleOpenChange}
                    handleSelectShowtime={handleSelectShowtime}
                  />
                ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}