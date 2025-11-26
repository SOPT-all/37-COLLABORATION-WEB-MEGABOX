import { Chip } from '@pages/movie-reservation/components/index';
import { CINEMAS } from '@pages/movie-reservation/constants/index';

interface CinemaChipsProps {
  selectedCinemas: string[];
}

export default function CinemaChips({
  selectedCinemas
}: CinemaChipsProps) {
  return (
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
  );
}