import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/@modal/Modal';
import Header from '@components/header/Header';
import Divider from '@components/divider/Divider';
import Tooltip from '@components/tooltip/Tooltip';
import { MOVIES } from '@constants/movies';
import { cn, mappingMoviePosters } from '@/shared/utils/index';
import { useFilter, useTooltip, useSelection, useModalDetail } from '@pages/booking/hooks/index';
import { type ShowtimeDetail } from '@pages/booking/components/Showtime';
import { Chip, Carousel, Showtime } from '@pages/booking/components/index';
import { TIMES, CINEMAS } from '@pages/booking/constants/index';
import { mockDates } from '@pages/booking/mock';

export default function Booking() {
  const [selectedShowtime, setSelectedShowtime] = useState<ShowtimeDetail | null>(null);

  const navigate = useNavigate();

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

  const movies = mappingMoviePosters().map((movie) => ({
    ...movie,
    title: MOVIES[movie.id].title,
  }));

  const dates = mockDates.slice().map((date) => date.slice(8));

  const allDates = mockDates.slice();
  const selectedFullDate = selectedDateId !== -1 ? allDates[selectedDateId] : null;
  const weekdays = allDates.map(dateStr => {
    const date = new Date(dateStr);
    return ['일','월','화','수','목','금','토'][date.getDay()];
  });
  const selectedWeekday = selectedDateId !== -1 ? weekdays[selectedDateId] : ''
  const handleClickShowtime = (detail: ShowtimeDetail) => {
    setSelectedShowtime(detail);
    handleOpenChange(true);
  };

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
  } = useModalDetail({selectedWeekday, selectedFullDate, selectedShowtime});

  return (
    <div className='select-none'>
      <Header
        variant='movie'
        title='영화 예매하기'
        handleClickBack={() => navigate(-1)}
      />

      <div className='p-[2rem]'>
        <div className='flex flex-col items-start gap-[1.2rem] w-full'>
          <Carousel
            movies={movies}
            selectedMovieIds={selectedMovieIds}
            handleClick={(id) => handleClickMovie(id)}
          />
          <div className='flex gap-[0.7rem] w-full overflow-x-scroll scrollbar-hide'>
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

          <div className='flex gap-[0.7rem] w-full overflow-x-scroll scrollbar-hide'>
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

          { isTooltipOpen && (
              <Tooltip
                message='최근 이용극장을 선호극장에 추가해보세요'
                handleClose={handleCloseTooltip}
              />
            )
          }

          <div className='flex flex-col gap-[2.2rem] w-full'>
            {filteredShowtimes.length > 0 ? (
              filteredShowtimes.map((cinema, idx) => (
                <div key={cinema.cinemaName} className='w-full'>
                  <Showtime
                    cinema={cinema}
                    handleClickShowtime={handleClickShowtime}
                  />
                  { idx !== filteredShowtimes.length - 1 && (
                    <div className="w-full h-[0.8rem] mt-[2.2rem] bg-gray-800" />
                  )}
                </div>
              ))
            ) : (
              <div className='flex justify-center w-full pt-[4rem] text-gray-400 font-label1'>
                선택한 조건에 맞는 상영 시간이 없습니다.
              </div>
            )}
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