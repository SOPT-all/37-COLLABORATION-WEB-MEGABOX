import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/@modal/Modal';
import Header from '@components/header/Header';
import Divider from '@components/divider/Divider';
import Tooltip from '@components/tooltip/Tooltip';
import { MOVIES } from '@constants/movies';
import { cn, mappingMoviePosters } from '@/shared/utils/index';
import { useFilter, useTooltip, useSelection, useModalDetail } from '@pages/booking/hooks/index';
import { Chip, Carousel, Cinema, Movie, Theater } from '@pages/booking/components/index';
import { getDateAndWeekday } from '@pages/booking/utils/get-date-info';
import { TIMES, CINEMAS } from '@pages/booking/constants/index';
import { mockDates } from '@pages/booking/mock';
import { useShowtimeStore } from '@pages/booking/store/showtimeStore';

export default function Booking() {
  const navigate = useNavigate();

  const selectedShowtime = useShowtimeStore((state) => state.selectedShowtime);

  const {
    isTooltipOpen,
    handleCloseTooltip,
  } = useTooltip();
  const {
    selectedMovieIds,
    selectedCinemas,
    handleClickMovie,
    handleClickDate,
    handleClickTime,
    selectedDateId,
    selectedTimeId,
  } = useSelection();
  const filteredShowtimes
    = useFilter(selectedTimeId);

  const initialOpenMap = Object.fromEntries(
    filteredShowtimes.map(cinema => [cinema.cinemaName, true])
  );
  const [showtimeOpenMap, setShowtimeOpenMap] = useState<Record<string, boolean>>(initialOpenMap);

  const movies = mappingMoviePosters().map((movie) => ({
    ...movie,
    title: MOVIES[movie.id].title,
  }));

  const dates = [...mockDates].map((date) => date.slice(8));

  const { selectedDate, selectedWeekday, weekdays } = getDateAndWeekday(mockDates, selectedDateId);

  const {
    isOpen,
    quantity,
    handleOpenChange,
    handleDecrease,
    handleIncrease,
    handleClickPayment,
    modalMovieTitle,
    modalDateString,
    modalLocation,
  } = useModalDetail({selectedDate, selectedWeekday, selectedShowtime});

  const handleOpenShowtime = (cinemaName: string, isOpen: boolean) => {
    setShowtimeOpenMap(prev => ({
      ...prev,
      [cinemaName]: isOpen,
    }));
  };

  return (
    <div className='select-none'>
      <Header
        variant='movie'
        title='영화 예매하기'
        handleClickBack={() => navigate(-1)}
      />

      <div className='p-[2rem]'>
        <div className='scroll-fade flex flex-col items-start gap-[1.2rem] w-full'>
          <Carousel
            movies={movies}
            selectedMovieIds={selectedMovieIds}
            handleClick={(id) => handleClickMovie(id)}
          />
          <div className='flex gap-[0.7rem] w-full px-[0.5rem] overflow-x-scroll scrollbar-hide'>
            {CINEMAS.map((cinema) => (
              <Chip
                key={cinema}
                variant='cinema'
                isSelected={selectedCinemas.includes(cinema)}
              >
                {cinema}
              </Chip>
            ))}
          </div>

          <div className='flex gap-[0.7rem] w-full px-[0.5rem] overflow-x-scroll scrollbar-hide'>
            {dates.map((day, idx) => (
              <Chip
                key={idx}
                variant='date'
                isSelected={selectedDateId === idx}
                onClick={() => handleClickDate(idx)}
              >
                <span className={cn('font-title3', weekdays[idx] === '토' && 'text-blue-500', weekdays[idx] === '일' && 'text-red-500')}>{day}</span>
                <span className={cn('font-label1', weekdays[idx] === '토' && 'text-blue-500', weekdays[idx] === '일' && 'text-red-500')}>{weekdays[idx]}</span>
              </Chip>
            ))}
          </div>
        </div>

        <div className='mt-[1.8rem] mb-[1.6rem]'>
          <Divider />
        </div>

        <div className='flex flex-col items-start gap-[1.1rem] w-full'>
          <div className='flex items-start gap-[0.8rem] w-full py-[1rem] opacity-70 overflow-x-scroll scrollbar-hide'>
            {TIMES.map((time, idx) => (
              <Chip
                key={idx}
                variant='time'
                isSelected={selectedTimeId === idx}
                onClick={() => handleClickTime(idx)}
              >
                {time}
              </Chip>
            ))}
          </div>

          {isTooltipOpen && (
              <Tooltip
                message='최근 이용극장을 선호극장에 추가해보세요'
                handleClose={handleCloseTooltip}
              />
          )}

          <div className='flex flex-col gap-[2.2rem] w-full'>
            {filteredShowtimes.map((cinema) => (
              <div className='flex flex-col gap-[2.2rem] w-full'>
                <Cinema
                  key={cinema.cinemaName}
                  cinemaName={cinema.cinemaName}
                  isShowtimeOpen={showtimeOpenMap[cinema.cinemaName] ?? true}
                  handleOpenShowtime={(isOpen) => handleOpenShowtime(cinema.cinemaName, isOpen)}
                />
                {showtimeOpenMap[cinema.cinemaName] && (
                  cinema.movies.map((movie) => (
                    <>
                      <Movie
                        key={`${cinema.cinemaName} - ${movie.movieTitle}`}
                        movieTitle={movie.movieTitle}
                        ageRating={12}
                      />
                      {movie.theaters.map((theater) => (
                        <Theater
                          key={`${cinema.cinemaName} - ${movie.movieTitle} - ${theater.theaterName}`}
                          theaterName={theater.theaterName}
                          screenType={theater.screenType}
                          showtimes={theater.showtimes}
                          cinemaName={cinema.cinemaName}
                          movieTitle={movie.movieTitle}
                          handleOpenModal={handleOpenChange}
                        />
                      ))}
                    </>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          handleOpenChange={handleOpenChange}
          movieTitle={modalMovieTitle}
          date={modalDateString}
          location={modalLocation}
          quantity={quantity}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleClickPayment={handleClickPayment}
        />
      </div>
    </div>
  );
}