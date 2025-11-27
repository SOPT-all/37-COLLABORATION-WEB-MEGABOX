import { useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import { type CinemaResponse, type ShowtimeReadRequest } from 'apis/data-contracts';

import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

async function apiGetShowtimesFixed(params: ShowtimeReadRequest) {
  const { movieIds, date, timeSlot } = params;

  const response = await axios.get(
    'https://sopt37mega.kro.kr/api/v1/showtimes',
    {
      params: {
        movieIds,
        date,
        timeSlot,
      },
      paramsSerializer: {
        indexes: null,
      },
    }
  );

  return response.data.data?.cinemas;
}

export default function Reservation() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSelectedMovie = location.state?.movieId;

  const queryClient = useQueryClient()

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
  } = useSelection({initialSelectedMovie, initialSelectedDate: dates[0]});

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

  // const showtimesKey = (params: ShowtimeReadRequest) => [
  //   'showtimes',
  //   [...(params.movieIds ?? [])].sort((a, b) => a - b),
  //   params.date,
  //   params.timeSlot ?? null,
  // ];
  const showtimesKey = (params: ShowtimeReadRequest) => [
    'showtimes',
    JSON.stringify([...(params.movieIds ?? [])].sort((a, b) => a - b)),
    params.date,
    params.timeSlot ?? null,
  ];

  const prefetchShowtimes = async (params: ShowtimeReadRequest) => {
    if (!params.movieIds?.length) return;

    await queryClient.prefetchQuery({
      // queryKey: ['showtimes', params.movieIds, params.date, params.timeSlot],
      queryKey: showtimesKey(params),
      queryFn: () => apiGetShowtimesFixed(params),
      staleTime: 1000 * 60,  // 1분
      gcTime: 1000 * 60 * 5, // 5분
    });
  };

  return (
    <div>
      <Header
        variant='movie'
        title='영화 예매하기'
        icon={false}
        handleClickBack={() => navigate(-1)}
      />
      <div className='p-[2rem]'>
        <div className='scroll-fade flex w-full flex-col items-start gap-[1.2rem]'>
          <Carousel
            selectedMovieIds={selectedMovieIds}
            initialSelectedMovie={initialSelectedMovie}
            handleClick={id => handleClickMovie(id)}
            prefetchShowtimes={prefetchShowtimes}   // ⭐ 추가
            selectedDate={selectedDate}        // ⭐ 추가
            selectedTimeSlot={selectedTimeSlot}     // ⭐ 추가
          />
          <CinemaChips selectedCinemas={selectedCinemas} />
          <DateChips
            dates={dates}
            selectedDate={selectedDate}
            handleClickDate={handleClickDate}
            movieIds={selectedMovieIds}
            timeSlot={selectedTimeSlot}
            prefetchShowtimes={prefetchShowtimes}
          />
        </div>
        <div className='mt-[1.8rem] mb-[1.6rem]'>
          <Divider />
        </div>
        <div className='flex w-full flex-col items-start gap-[1.1rem]'>
          <TimeChips
            selectedTimeId={selectedTimeId}
            handleClickTime={handleClickTime}
            movieIds={selectedMovieIds}
            selectedDate={selectedDate}
            prefetchShowtimes={prefetchShowtimes}
          />
          {isLoading ? (
            <Spinner className='w-[15rem]' />
          ) : (
            <div className='relative w-full'>
              {filteredShowtimes.length !== 0 && isTooltipOpen && (
                <div className='absolute -top-[3.2rem] left-[3.5rem]'>
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
            </div>
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
