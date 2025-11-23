import Header from '@components/header/Header';
import Movie from '@components/movie/Movie';
import Button from '@components/button/Button';

import MovieDetailTabs from './MovieDetailTabs';
import InfoSection from './InfoSection';
import ReviewSection from './ReviewSection';
import { useMovieDetail } from './hooks/use-movie-detail';

import {
  MOVIE_DETAIL_META,
  MOVIE_DETAIL_STATS,
} from './mock';

import ImgBanner from '@/../public/assets/img-Banner1.png';

export default function MovieDetail() {
  const {
    activeTab,
    descriptionText,
    handleClickTab,
    isDescriptionExpanded,
    handleToggleDescription,
  } = useMovieDetail();

  const movie = MOVIE_DETAIL_META;
  const stats = MOVIE_DETAIL_STATS;

  const handleClickBannerBadge = () => {};

  return (
    <div className="min-h-screen bg-gray-900">
      <Header variant="movie" title={movie.title} />

      <main className="bg-gray-900 pb-[4rem]">
        <Movie
          id={movie.id}
          title={movie.title}
          tag={movie.tag}
          ageRating={movie.ageRating}
          releaseDate={movie.releaseDate}
          runningTimeMinutes={movie.runningTimeMinutes}
        />

        <section className="bg-gray-900 px-[1.5rem] pt-[1rem] pb-[0.75rem]">
          <p className="text-center">
            <span className="font-body1 text-gray-0">예매 </span>
            <span className="font-body3 text-violet-200">
              {stats.reservationRank}위
            </span>
            <span className="font-body1 text-gray-100">
              ({stats.reservationSharePercent}%)
            </span>

            <span className="font-body1 text-gray-0"> | 관람 </span>
            <span className="font-body3 text-gray-0">
              {stats.totalAudienceText}
            </span>

            <span className="font-body1 text-gray-0"> | 별점 </span>
            <span className="font-body3 text-violet-200">
              {stats.averageScore}
            </span>
          </p>
        </section>

        <section className="bg-gray-900 px-[1.5rem] pb-[1.25rem]">
          <Button variant="primary">바로예매</Button>
        </section>

        <section className="bg-gray-900 px-[1.5rem] pb-[2.875rem]">
          <div className="flex gap-[0.75rem]">
            <p className="flex-1 font-body1 text-gray-0">
              {descriptionText}
            </p>

            <button
              type="button"
              className="self-end font-button2 text-gray-400"
              onClick={handleToggleDescription}
            >
              {isDescriptionExpanded ? '접기' : '더보기'}
            </button>
          </div>
        </section>

        <section className="bg-gray-900 pb-[0.75rem]">
          <div className="relative overflow-hidden">
            <img
              src={ImgBanner}
              alt="체인소 맨: 레제편 개봉 이벤트 배너"
              className="h-[7.6rem] w-full object-cover"
            />

            <button
              type="button"
              onClick={handleClickBannerBadge}
              className="
                absolute left-0 top-0 inline-flex
                items-center justify-center
                rounded-br-[0.6rem]
                px-[1.2rem] py-[0.3rem]
                bg-blueGreen-500
                font-label2 text-gray-0
              "
            >
              이벤트
            </button>
          </div>
        </section>

        <section>
          <MovieDetailTabs
            activeTab={activeTab}
            onChange={handleClickTab}
            reviewCount={stats.totalReviewCount}
          />
          {activeTab === 'info' ? <InfoSection /> : <ReviewSection />}
        </section>
      </main>
    </div>
  );
}
