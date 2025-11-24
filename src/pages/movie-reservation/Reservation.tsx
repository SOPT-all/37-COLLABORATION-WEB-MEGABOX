import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Modal from '@components/@modal/Modal';
import Header from '@components/header/Header';
import Divider from '@components/divider/Divider';
import Tooltip from '@components/tooltip/Tooltip';

import { cn } from '@utils/index';
import {
  useFilter,
  useTooltip,
  useSelection,
  useModalDetail,
  useDate,
} from '@pages/movie-reservation/hooks/index';
import {
  Chip,
  Carousel,
  Cinema,
  Movie,
  Theater,
} from '@pages/movie-reservation/components/index';
import { TIMES, CINEMAS } from '@pages/movie-reservation/constants/index';

import { useShowtimeStore } from '@pages/movie-reservation/store/showtimeStore';

export default function Reservation() {
  const navigate = useNavigate();

  const selectedShowtime = useShowtimeStore(state => state.selectedShowtime);
  const dates = useDate();
  const { isTooltipOpen, handleCloseTooltip } = useTooltip();
  const {
    selectedMovieIds,
    selectedCinemas,
    handleClickMovie,
    handleClickDate,
    handleClickTime,
    selectedDate,
    selectedTimeId,
  } = useSelection(dates[0]);

  const filteredShowtimes = useFilter(selectedDate.date);

  const initialOpenMap = Object.fromEntries(
    filteredShowtimes.map(cinema => [cinema.cinemaName, true])
  );
  const [showtimeOpenMap, setShowtimeOpenMap] =
    useState<Record<string, boolean>>(initialOpenMap);

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
  } = useModalDetail({
    selectedDate: selectedDate.date,
    selectedWeekday: selectedDate.day,
    selectedShowtime,
  });

  const handleOpenShowtime = (cinemaName: string, isOpen: boolean) => {
    setShowtimeOpenMap(prev => ({
      ...prev,
      [cinemaName]: isOpen,
    }));
  };

  return (
    <div>
      <Header
        variant='movie'
        title='영화 예매하기'
        handleClickBack={() => navigate(-1)}
      />

      <div className='p-[2rem]'>
        <div className='scroll-fade flex w-full flex-col items-start gap-[1.2rem]'>
          <Carousel
            selectedMovieIds={selectedMovieIds}
            handleClick={id => handleClickMovie(id)}
          />
          <div className='scrollbar-hide flex w-full gap-[0.7rem] overflow-x-scroll px-[0.5rem]'>
            {CINEMAS.map(cinema => (
              <Chip
                key={cinema}
                variant='cinema'
                isSelected={selectedCinemas.includes(cinema)}
              >
                {cinema}
              </Chip>
            ))}
          </div>

          <div className='scrollbar-hide flex w-full gap-[0.7rem] overflow-x-scroll px-[0.5rem]'>
            {dates.map((dateInfo, idx) => {
              const dayColorClass = cn(
                dateInfo.day === '토' && 'text-blue-500',
                dateInfo.day === '일' && 'text-red-500'
              );
              const dateString = dayjs(dateInfo.date).format('M/D');

              return (
                <Chip
                  key={idx}
                  variant='date'
                  isSelected={selectedDate.date === dateInfo.date}
                  onClick={() => handleClickDate(dateInfo)}
                >
                  <span className={cn('font-title3', dayColorClass)}>
                    {dateInfo.day}
                  </span>
                  <span className={cn('font-label1', dayColorClass)}>
                    {dateString}
                  </span>
                </Chip>
              );
            })}
          </div>
        </div>

        <div className='mt-[1.8rem] mb-[1.6rem]'>
          <Divider />
        </div>

        <div className='flex w-full flex-col items-start gap-[1.1rem]'>
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

          {isTooltipOpen && (
            <Tooltip
              message='최근 이용극장을 선호극장에 추가해보세요'
              handleClose={handleCloseTooltip}
            />
          )}

          <div className='flex w-full flex-col gap-[2.2rem]'>
            {filteredShowtimes.map(cinema => (
              <div className='flex w-full flex-col gap-[2.2rem]'>
                <Cinema
                  key={cinema.cinemaName}
                  cinemaName={cinema.cinemaName}
                  isShowtimeOpen={showtimeOpenMap[cinema.cinemaName] ?? true}
                  handleOpenShowtime={isOpen =>
                    handleOpenShowtime(cinema.cinemaName, isOpen)
                  }
                />
                {showtimeOpenMap[cinema.cinemaName] &&
                  cinema.movies.map(movie => (
                    <>
                      <Movie
                        key={`${cinema.cinemaName} - ${movie.movieTitle}`}
                        movieTitle={movie.movieTitle}
                        ageRating={12}
                      />
                      {movie.theaters.map(theater => (
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
                  ))}
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
