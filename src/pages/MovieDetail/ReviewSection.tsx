import Review from '@components/review/Review';
import { IconStarFill } from '@assets/index';

const MOCK_REVIEWS = [
  {
    content:
      '영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요.',
    rating: 4.5,
    createdAt: new Date('2025-11-17'),
    nickname: 'fu**s212',
  },
  {
    content: '영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요.',
    rating: 5,
    createdAt: new Date('2025-11-16'),
    nickname: 'fu**s215',
  },
  {
    content:
      '영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요. 영화가 재미있어요.',
    rating: 4.5,
    createdAt: new Date('2025-11-15'),
    nickname: 'fu**s213',
  },
];

const AVERAGE_SCORE = 9.5;   
const STAR_RATING = 4.5;     

export default function ReviewSection() {
  return (
    <div className="bg-gray-900 pb-10 pt-2 text-gray-0">
      <section className="mt-6 px-6">
        <div className="text-center">
          <p className="font-body4 text-violet-600">
            {AVERAGE_SCORE}
            <span className="font-body5 text-gray-0"> / 10</span>
          </p>

          <div className="mt-2 flex justify-center gap-[0.2rem]">
            {Array.from({ length: 5 }).map((_, index) => {
              const diff = STAR_RATING - index; 
              const fillPercent = Math.max(0, Math.min(1, diff)) * 100;

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
          className="mt-5 w-full rounded-[0.8rem] border border-gray-300 py-3 text-center font-button3-size text-gray-400"
        >
          실관람평 작성하고 포인트 받기
        </button>
      </section>

      <section className="mt-4 px-6">
        <h2 className="mb-2 font-title3">
          <span className="text-gray-0">실관람평 </span>
          <span className="text-violet-500">13,298</span>
        </h2>

        <div className="divide-y divide-gray-800">
          {MOCK_REVIEWS.map((review) => (
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
