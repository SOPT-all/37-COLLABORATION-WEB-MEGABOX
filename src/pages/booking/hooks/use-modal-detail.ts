import { useNavigate } from 'react-router-dom';
import { useModal } from '@/shared/components/@modal/hooks/use-modal';
import { type ShowtimeDetail } from '@pages/booking/components/Showtime';
import { formatTime, formatDate } from '@/shared/utils/date-format';

interface useModalDetailProps {
  selectedWeekday: string;
  selectedFullDate: string | null;
  selectedShowtime: ShowtimeDetail | null;
}

/**
 * 모달 컴포넌트 prop과 모달에 전달할 세부사항을 반환하는 훅
 * @param selectedWeekday
 * @param selectedFulldate
 * @returns 모달에 전달할 세부사항
 */
export function useModalDetail({
  selectedWeekday,
  selectedFullDate,
  selectedShowtime
}: useModalDetailProps) {
  const navigate = useNavigate();

  // [TODO] 동적으로 전달하도록 개선 필요
  const maxQuantity = 10;
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
    ? `${formatDate(new Date(selectedFullDate!))} (${selectedWeekday}) ${formatTime(selectedShowtime.startTime)} ~ ${formatTime(selectedShowtime.endTime)}`
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