import { useNavigate } from 'react-router-dom';
import { useModal } from '@/shared/components/@modal/hooks/use-modal';
import { type ShowtimeDetail } from '@pages/booking/components/Showtime';
import { formatTime, formatDate } from '@/shared/utils/date-format';

interface useModalDetailProps {
  selectedDate: string | null
  selectedWeekday: string;
  selectedShowtime: ShowtimeDetail | null;
}

/**
 * 모달 컴포넌트 prop과 모달에 전달할 세부사항을 반환하는 훅
 * @param selectedWeekday
 * @param selecteddate
 * @returns 모달에 전달할 세부사항
 */
export function useModalDetail({
  selectedDate,
  selectedWeekday,
  selectedShowtime
}: useModalDetailProps) {
  const navigate = useNavigate();

  const maxQuantity = selectedShowtime?.totalSeatCount ?? 0;
  const {
    isOpen,
    handleOpenChange,
    quantity,
    handleDecrease,
    handleIncrease
  } = useModal(maxQuantity);

  const handleClickPayment = () => {
    handleOpenChange(false);
    // [TODO] 실제 결제 페이지로 라우트
    navigate('/');
  };

  const modalDateString = selectedShowtime
    ? `${formatDate(new Date(selectedDate!))} (${selectedWeekday}) ${formatTime(selectedShowtime.startTime)} ~ ${formatTime(selectedShowtime.endTime)}`
    : '';

  const modalLocation = selectedShowtime
    ? `${selectedShowtime.cinemaName}/${selectedShowtime.theaterName} ${selectedShowtime.screenType}`
    : '';

  const modalMovieTitle = selectedShowtime?.movieTitle || '';

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