import {
  IconGoodFill,
  IconHalfstarFill,
  IconKebab,
  IconStarFill,
} from '@assets/index';
import { getRoundedStarStates, formatDate } from '@utils/index';

interface ReviewProps {
  content: string;
  rating: number;
  createdAt: Date;
  nickname: string;
}
export default function Review({
  content,
  rating,
  createdAt,
  nickname,
}: ReviewProps) {
  return (
    <div className='text-gray-0 flex w-full flex-col gap-[0.1rem] border-b border-gray-200 bg-gray-900 py-[1.5rem]'>
      <div className='flex flex-col gap-[1rem]'>
        <div className='flex items-center justify-between'>
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

          <div className='text-label2 flex gap-[0.5rem]'>
            <span>{nickname}</span>
            <span>·</span>
            <span>{formatDate(createdAt)}</span>
          </div>
        </div>
        <p className='text-body1'>{content}</p>
      </div>
      <div className='flex items-center justify-end gap-[0.1rem]'>
        <IconGoodFill className='cursor-pointer text-gray-200' />
        <span className='text-caption2 text-blue-500'>0</span>
        <IconKebab className='cursor-pointer text-gray-200' />
      </div>
    </div>
  );
}
