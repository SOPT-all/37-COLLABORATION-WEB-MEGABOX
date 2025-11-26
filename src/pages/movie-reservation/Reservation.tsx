import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/@modal/Modal';
import Header from '@components/header/Header';
import Divider from '@components/divider/Divider';
import Tooltip from '@components/tooltip/Tooltip';
import Spinner from '@components/spinner/Spinner';

import {
  useTooltip,
  useSelection,
  useModalDetail,
  useDate,
  useShowtimes,
} from '@pages/movie-reservation/hooks/index';
import { Carousel } from '@pages/movie-reservation/components/index';
import {
  CinemaChips,
  DateChips,
  TimeChips,
  Schedule
} from '@pages/movie-reservation/section/index';
import { type TimeType, TIMES } from '@pages/movie-reservation/constants/index';
import { type ShowtimeDetail } from '@pages/movie-reservation/types/index';
import { type CinemaResponse } from 'apis/data-contracts';

export default function Reservation() {
  const navigate = useNavigate();

  const [selectedShowtime, setSelectedShowtime] = useState<ShowtimeDetail | null>(null);
  const dates = useDate();
  const { isTooltipOpen, handleCloseTooltip } = useTooltip();
  const {
    selectedMovieIds,
    selectedCinemas,
    selectedDate,
    selectedTimeId,
    handleClickMovie,
    handleClickDate,
    handleClickTime,
  } = useSelection(dates[0]);

  const selectedTimeSlot = selectedTimeId === null
    ? undefined
    : (TIMES[selectedTimeId].type as TimeType);

  const { data: filteredShowtimes, isLoading } = useShowtimes({
    movieIds: selectedMovieIds,
    date: selectedDate.date,
    timeSlot: selectedTimeSlot
  });

  const [showtimeOpenMap, setShowtimeOpenMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!filteredShowtimes) return;
    const newMap = Object.fromEntries(
      filteredShowtimes.map((cinema: CinemaResponse) => [cinema.cinemaName, true])
    );
    setShowtimeOpenMap(newMap);
  }, [filteredShowtimes]);

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
          <CinemaChips selectedCinemas={selectedCinemas} />
          <DateChips
            dates={dates}
            selectedDate={selectedDate}
            handleClickDate={handleClickDate}
          />
        </div>
        <div className='mt-[1.8rem] mb-[1.6rem]'>
          <Divider />
        </div>
        <div className='flex w-full flex-col items-start gap-[1.1rem]'>
          <TimeChips
            selectedTimeId={selectedTimeId}
            handleClickTime={handleClickTime}
          />
          {isLoading ? (
            <Spinner className='w-[15rem]' />
          ) : (
            <>
              {filteredShowtimes.length !== 0 && isTooltipOpen && (
                <div className='absolute top-[34rem] left-[5rem]'>
                  <Tooltip
                    message='최근 이용극장을 선호극장에 추가해보세요'
                    handleClose={handleCloseTooltip}
                  />
                </div>
              )}
              {filteredShowtimes.length !== 0 ? (
                <Schedule
                  filteredShowtimes={filteredShowtimes ?? []}
                  showtimeOpenMap={showtimeOpenMap}
                  handleOpenShowtime={handleOpenShowtime}
                  handleOpenChange={handleOpenChange}
                  handleSelectShowtime={setSelectedShowtime}
                />
              ) : (
                <div className='flex justify-center items-center w-full mt-[16rem] text-[1.3rem] text-gray-0'>상영정보가 존재하지 않습니다.</div>
              )}
            </>
          )}
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
