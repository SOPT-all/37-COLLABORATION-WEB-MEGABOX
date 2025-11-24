import { getRoundedStarStates } from '@utils/index';
import { IconStarFill, IconHalfstarFill } from '@assets/index';

interface StarsProps {
  rating: number;
}

export default function Stars({ rating }: StarsProps) {
  return (
    <div className='flex items-center gap-[0.2rem]'>
      {getRoundedStarStates(rating).map((state, index) => {
        if (state === 1) {
          return (
            <IconStarFill
              key={`star-filled-${index}`}
              className='text-violet-600'
            />
          );
        }
        if (state === 0.5) {
          return (
            <IconHalfstarFill
              key={`star-half-${index}`}
              className='text-violet-600'
            />
          );
        }
        return (
          <IconStarFill
            key={`star-outline-${index}`}
            className='text-gray-600'
          />
        );
      })}
    </div>
  );
}
