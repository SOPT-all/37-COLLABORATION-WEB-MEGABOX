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
                <Tooltip
                  message='최근 이용극장을 선호극장에 추가해보세요'
                  handleClose={handleCloseTooltip}
                />
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
                <div className='flex justify-center items-center w-full mt-[12rem] text-[1.3rem] text-gray-0'>상영정보가 존재하지 않습니다.</div>
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
