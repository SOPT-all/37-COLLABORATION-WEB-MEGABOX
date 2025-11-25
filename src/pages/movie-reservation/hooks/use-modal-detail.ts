import { useNavigate } from 'react-router-dom';
import { useModal } from '@components/@modal/hooks/use-modal';
import { formatTime, formatDate } from '@utils/date-format';
import { type ShowtimeDetail } from '@pages/movie-reservation/types/index';

interface useModalDetailProps {
  selectedDate: string | null;
  selectedWeekday: string;
  selectedShowtime: ShowtimeDetail | null;
}

/**
 * 모달 컴포넌트 prop과 모달에 전달할 세부사항을 반환하는 훅
 * @param selectedDate 선택된 날짜
 * @param selectedWeekday 선택된 요일
 * @param selectedShowtime 선택된 상영정보
 * @returns 모달에 전달할 세부사항
 */
export function useModalDetail({
  selectedDate,
  selectedWeekday,
  selectedShowtime,
}: useModalDetailProps) {
  const navigate = useNavigate();

  const maxQuantity = selectedShowtime?.totalSeatCount ?? 0;
  const { isOpen, handleOpenChange, quantity, handleDecrease, handleIncrease } =
    useModal(maxQuantity);

  const modalDateString = selectedShowtime
    ? `${formatDate(new Date(selectedDate!))} (${selectedWeekday}) ${formatTime(selectedShowtime.startTime)} ~ ${formatTime(selectedShowtime.endTime)}`
    : '';

  const modalLocation = selectedShowtime
    ? `${selectedShowtime.cinemaName}/${selectedShowtime.theaterName} ${selectedShowtime.screenType}`
    : '';

  const modalMovieTitle = selectedShowtime?.movieTitle || '';

  const handleClickPayment = () => {
    handleOpenChange(false);
    navigate(
      '/payment',
      { state: {
        memberId: 1,
        showtimeId: selectedShowtime?.showtimeId,
        movieId: selectedShowtime?.movieId,
        movieTitle: selectedShowtime?.movieTitle,
        date: modalDateString,
        location: modalLocation,
        numOfPeople: quantity,
      }}
    );
  };

  return {
    isOpen,
    quantity,
    handleOpenChange,
    handleDecrease,
    handleIncrease,
    handleClickPayment,
    modalMovieTitle,
    modalDateString,
    modalLocation,
  };
}
