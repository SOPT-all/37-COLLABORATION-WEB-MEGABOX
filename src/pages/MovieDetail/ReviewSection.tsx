import Review from '@components/review/Review';
import { IconStarFill } from '@assets/index';
import { getRoundedStarStates } from '@/shared/utils/rating';
import {
  MOVIE_DETAIL_STATS,
  MOVIE_DETAIL_REVIEWS,
} from './mock';

export default function ReviewSection() {
  const averageScore = MOVIE_DETAIL_STATS.averageScore;
  const starRating = averageScore / 2; 
  const starStates = getRoundedStarStates(starRating);

  return (
    <div className="bg-gray-900 pb-10 pt-2 text-gray-0">
      <section className="mt-6 px-6">
        <div className="text-center">
          <p className="font-body4 text-violet-600">
            {averageScore}
            <span className="font-body5 text-gray-0"> / 10</span>
          </p>

          <div className="mt-2 flex justify-center gap-[0.2rem]">
            {starStates.map((state, index) => {
              const fillPercent = state * 100;

              return (
                <div key={index} className="relative inline-block">
                  <IconStarFill className="text-gray-700" />
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${fillPercent}%` }}
                  >
                    <IconStarFill className="text-violet-600" />
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-2 font-title1 text-gray-300">
            연출, 영상미 좋은 영화
          </p>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-[0.8rem] border border-gray-300 py-3 text-center font-button3 text-gray-400"
        >
          실관람평 작성하고 포인트 받기
        </button>
      </section>

      <section className="mt-4 px-6">
        <h2 className="mb-2 font-title3">
          <span className="text-gray-0">실관람평 </span>
          <span className="text-violet-500">
            {MOVIE_DETAIL_STATS.totalReviewCount.toLocaleString('ko-KR')}
          </span>
        </h2>

        <div className="divide-y divide-gray-800">
          {MOVIE_DETAIL_REVIEWS.map((review) => (
            <Review
              key={`${review.nickname}-${review.createdAt.toISOString()}`}
              content={review.content}
              rating={review.rating}
              createdAt={review.createdAt}
              nickname={review.nickname}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

