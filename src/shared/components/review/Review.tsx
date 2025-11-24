import { IconGoodFill, IconKebab } from '@assets/index';
import { formatDate } from '@utils/index';
import { Stars } from '@components/index';

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
          <Stars rating={rating} />

          <div className='font-label2 flex gap-[0.5rem]'>
            <span>{nickname}</span>
            <span>·</span>
            <span>{formatDate(createdAt)}</span>
          </div>
        </div>
        <p className='font-body1'>{content}</p>
      </div>
      <div className='flex items-center justify-end gap-[0.1rem]'>
        <IconGoodFill className='cursor-pointer text-gray-200' />
        <span className='font-caption2 text-blue-500'>0</span>
        <IconKebab className='cursor-pointer text-gray-200' />
      </div>
    </div>
  );
}
