import { formatTime } from "@/shared/utils";
import { useShowtimeStore, type ShowtimeDetail } from '@/pages/booking/store/showtimeStore';

interface TimeProps {
  cinemaName: string;
  movieTitle: string;
  theaterName: string;
  screenType: string;
  showtimeId: number;
  startTime: string;
  endTime: string;
  totalSeatCount: number;
  availableSeatCount: number;
  handleOpenModal: (_: boolean) => void;
}

export default function Time({
  cinemaName,
  movieTitle,
  theaterName,
  screenType,
  showtimeId,
  startTime,
  endTime,
  totalSeatCount,
  availableSeatCount,
  handleOpenModal
}: TimeProps) {
  const setSelectedShowtime = useShowtimeStore((state) => state.setSelectedShowtime);

  const handleClick = () => {
    setSelectedShowtime({
      cinemaName,
      movieTitle,
      theaterName,
      screenType,
      showtimeId,
      startTime,
      endTime,
      totalSeatCount,
      availableSeatCount,
    } as ShowtimeDetail);

    handleOpenModal(true);
  };

  return (
    <div
      className='flex flex-col gap-[0.4rem] w-[7.9rem] border rounded-[0.4rem] border-gray-600 cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex flex-col items-center w-full pt-[1.4rem]'>
        <span className='font-title3 text-gray-0'>{formatTime(startTime)}</span>
        <span className='font-label1 text-gray-400'>~{formatTime(endTime)}</span>
      </div>
      <div className='flex justify-center gap-[0.3rem] w-full py-[0.2rem] rounded-b-[0.4rem] bg-gray-800'>
        <span className='font-subtitle1 text-violet-400'>{availableSeatCount}</span>
        <span className='font-subtitle1 text-gray-600'>|</span>
        <span className='font-subtitle1 text-gray-400'>{totalSeatCount}</span>
      </div>
    </div>
  );
}
