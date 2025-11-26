import { useParams } from 'react-router-dom';

import { IconStarFill } from '@assets/index';
import { getRoundedStarStates } from '@utils/index';
import {
  MOVIE_DETAIL_STATS,
  MOVIE_DETAIL_REVIEWS,
} from '@pages/movie-detail/mock';
import { Button, Review } from '@components/index';
import {
  useGetMovieDetailQuery,
  useGetMovieReviewsQuery,
} from '@pages/movie-detail/api/use-movie-detail-queries';

export default function ReviewSection() {
  const { id } = useParams<{ id: string }>();
  const fallbackId = 1;
  const movieId = Number(id ?? fallbackId) || fallbackId;

  const { data: detailResponse } = useGetMovieDetailQuery(movieId);
  const { data: reviewsResponse } = useGetMovieReviewsQuery(movieId);

  const detail = detailResponse?.data;
  const reviewsData = reviewsResponse?.data;

  const averageScore = detail?.rating ?? MOVIE_DETAIL_STATS.averageScore;
  const starRating = averageScore / 2;
  const starStates = getRoundedStarStates(starRating);

  const totalReviewCount =
    reviewsData?.reviewCount ?? MOVIE_DETAIL_STATS.totalReviewCount;
  const totalReviewCountText =
    totalReviewCount.toLocaleString('ko-KR');

  const reviews =
    reviewsData?.reviews?.map(review => ({
      content: review.content ?? '',
      rating: review.rating ?? 0,
      createdAt: review.createdAt
        ? new Date(review.createdAt)
        : new Date(),
      nickname: review.nickname ?? '익명',
    })) ?? MOVIE_DETAIL_REVIEWS;

  return (
    <div className="flex flex-col">
      <section className="relative flex flex-col items-center pt-[2.2rem] pb-[1.1rem] bg-[#181818] overflow-hidden">
        <div className="pointer-events-none absolute -left-[2.5rem] top-[5rem] h-[3.75rem] w-[3.75rem] rounded-full bg-violet-600 blur-[2.375rem] opacity-80" />
        <div className="pointer-events-none absolute -right-[2.5rem] top-[5rem] h-[3.75rem] w-[3.75rem] rounded-full bg-violet-600 blur-[2.375rem] opacity-80" />
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
      <div className="px-[1.7rem] flex flex-col gap-[1.5rem]">
        <Button variant='secondary' className='mt-[3.2rem] w-full py-3'>
          실관람평 작성하고 포인트 받기
        </Button>

        <section className='flex flex-col gap-[1.5rem]'>
          <h2 className="mb-2 font-title3">
            <span className="text-gray-0">실관람평 </span>
            <span className="text-violet-500">{totalReviewCountText}</span>
          </h2>
          {reviews.map(review => (
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
    </div>
  );
}