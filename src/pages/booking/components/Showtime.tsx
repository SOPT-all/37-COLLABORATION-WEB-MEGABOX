import { useState } from 'react';
import { IconStarFill } from '@assets/index';
import UpArrow from '@assets/components/IconSystemUparrow';
import { formatTime } from '@utils/date-formate';
import type {
  ShowtimeByTimeProps,
  ShowtimeByTheaterProps,
  ShowtimeByMovieProps,
  ShowtimeProps,
} from '@/pages/booking/types';

// 특정 시간대의 상영 정보를 나타내는 컴포넌트
function ShowtimeByTime({
  showtime,
  movieTitle,
  cinemaName,
  theaterName,
  screenType,
  handleClick
}: ShowtimeByTimeProps) {
  const startTime = formatTime(showtime.startTime);
  const endTime = formatTime(showtime.endTime);

  // 모달 클릭 시 모달에 전달해줄 데이터
  const detail = {
    cinemaName,
    movieTitle,
    theaterName,
    screenType,
    showtimeId: showtime.showtimeId,
    startTime: showtime.startTime,
    endTime: showtime.endTime,
    seatCount: showtime.seatCount,
    leftSeatCount: showtime.leftSeatCount,
  };

  return (
    <div
      className='flex flex-col gap-[0.4rem] w-[7.9rem] border rounded-[0.4rem] border-gray-600 cursor-pointer'
      onClick={() => handleClick(detail)}
    >
      <div className='flex flex-col items-center w-full pt-[1.4rem]'>
        <span className='font-title3 text-gray-0'>{startTime}</span>
        <span className='font-label1 text-gray-400'>~{endTime}</span>
      </div>
      <div className='flex justify-center gap-[0.3rem] w-full py-[0.2rem] rounded-b-[0.4rem] bg-gray-800'>
        <span className='font-subtitle1 text-violet-400'>{showtime.leftSeatCount}</span>
        <span className='font-subtitle1 text-gray-600'>|</span>
        <span className='font-subtitle1 text-gray-400'>{showtime.seatCount}</span>
      </div>
    </div>
  );
}

// 특정 상영관의 상영 정보를 나타내는 컴포넌트
function ShowtimeByTheater({
  theater,
  movieTitle,
  cinemaName,
  handleClick,
}: ShowtimeByTheaterProps) {
  return (
    <div className='flex flex-col gap-[0.9rem] w-full'>
      <div className='flex justify-between'>
        <span className='font-label2 text-gray-0'>{theater.theaterName}</span>
        <span className='font-label2 text-gray-500'>{theater.screenType}</span>
      </div>
      <div className='flex gap-[0.9rem] flex-wrap'>
        {theater.showtimes.map((showtime) => (
          <ShowtimeByTime
            key={showtime.showtimeId}
            showtime={showtime}
            movieTitle={movieTitle}
            cinemaName={cinemaName}
            theaterName={theater.theaterName}
            screenType={theater.screenType}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

// 특정 영화의 상영 정보를 나타내는 컴포넌트
function ShowtimeByMovie({
  movie,
  cinemaName,
  handleClickShowtime,
}: ShowtimeByMovieProps) {
  // 현재 상영 정보 API에서 나이 제한을 전달해주지 않아 일단 임의로 설정함 (개선 필요)
  const ageRating: 'ALL' | 12 | 15 | 19 = movie.ageRating || 15;
  const movieTitle = movie.movieTitle;

  return (
    <>
      <div className='flex flex-col gap-[2.1rem]'>
        <div className='flex gap-[1.1rem]'>
          <img
            src='/assets/@movies/img-moviePoster.png'
            alt={`${movieTitle} 포스터`}
            className='w-[3.4rem] h-[4.5rem]'
          />
          <div className='flex items-center gap-[0.6rem]'>
            <img
              src={`/assets/ageLimit-${ageRating}.png`}
              alt={`${ageRating} 제한`}
              className='w-[1.5rem] h-[1.5rem]'
            />
            <span className='font-title2 text-gray-0'>{movieTitle}</span>
          </div>
        </div>
      </div>
      {movie.theaters.map((theater, idx) => (
        <ShowtimeByTheater
          key={`${theater.theaterName}-${idx}`}
          theater={theater}
          movieTitle={movieTitle}
          cinemaName={cinemaName}
          handleClick={handleClickShowtime}
        />
      ))}
    </>
  );
}

// 특정 영화관의 상영 정보를 나타내는 컴포넌트
export default function Showtime({
  cinema,
  handleClickShowtime
}: ShowtimeProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClickUpArrow = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className='flex flex-col gap-[2.2rem] w-full'>
      <div className='flex items-center gap-[0.4rem] py-[0.5rem]'>
        <IconStarFill
          className={`${isLiked ? 'text-violet-400' : 'text-gray-600'} cursor-pointer`}
          onClick={() => setIsLiked(prev => !prev)}
        />
        <span className='font-title2 text-gray-0'>
          {cinema.cinemaName}
        </span>
        <UpArrow
          width={12}
          height={12}
          className={`text-gray-300 cursor-pointer ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          onClick={handleClickUpArrow}
        />
      </div>
      {isOpen && cinema.movies.map((movie, idx) => (
        <ShowtimeByMovie
          key={`${movie.movieTitle}-${idx}`}
          movie={movie}
          cinemaName={cinema.cinemaName}
          handleClickShowtime={handleClickShowtime}
        />
      ))}
    </div>
  );
}