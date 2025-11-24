import { IconStarFill } from '@assets/index';
import { getRoundedStarStates } from '@utils/index';
import { MOVIE_DETAIL_STATS, MOVIE_DETAIL_REVIEWS } from './mock';
import { Button, Review } from '@components/index';

export default function ReviewSection() {
  const averageScore = MOVIE_DETAIL_STATS.averageScore;
  const starRating = averageScore / 2;
  const starStates = getRoundedStarStates(starRating);

  return (
    <div className='flex flex-col gap-[2.8rem] p-[1.7rem]'>
      <section className='flex flex-col items-center pt-[2.2rem] pb-[1.1rem]'>
        <p className='font-body4 text-violet-600'>
          {averageScore}
          <span className='font-body5 text-gray-0'> / 10</span>
        </p>

        <div className='mt-[0.8rem] flex justify-center gap-[0.2rem]'>
          {starStates.map((state, index) => {
            const fillPercent = state * 100;

            return (
              <div key={index} className='relative inline-block'>
                <IconStarFill className='text-gray-700' />
                <div
                  className='absolute inset-0 overflow-hidden'
                  style={{ width: `${fillPercent}%` }}
                >
                  <IconStarFill className='text-violet-600' />
                </div>
              </div>
            );
          })}
        </div>

        <p className='font-title1 mt-[1.4rem] text-gray-300'>
          연출, 영상미 좋은 영화
        </p>
      </section>
      <Button variant='secondary' className='mt-[1.25rem] w-full'>
        실관람평 작성하고 포인트 받기
      </Button>
      <section className='flex flex-col gap-[1.5rem]'>
        {MOVIE_DETAIL_REVIEWS.map(review => (
          <Review
            key={`${review.nickname}-${review.createdAt.toISOString()}`}
            content={review.content}
            rating={review.rating}
            createdAt={review.createdAt}
            nickname={review.nickname}
          />
        ))}
      </section>
    </div>
  );
}
