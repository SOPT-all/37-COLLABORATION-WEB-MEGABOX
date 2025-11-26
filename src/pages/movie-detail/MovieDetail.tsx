import { useParams, useNavigate } from 'react-router-dom';

import { Header, Movie, Button } from '@components/index';
import { InfoSection, ReviewSection } from '@pages/movie-detail/@section';
import { useMovieDetail } from '@pages/movie-detail/hooks/use-movie-detail';
import {MOVIE_DETAIL_META, MOVIE_DETAIL_STATS, MOVIE_DETAIL_DESCRIPTION, MOVIE_DETAIL_AUDIENCE_CARD} from '@pages/movie-detail/mock';
import {Tab, TabContainer} from '@pages/movie-detail/components/MovieDetailTabs';
import {useGetMovieDetailQuery, useGetMovieReviewsQuery} from '@pages/movie-detail/api/use-movie-detail-queries';
import { ROUTES } from '@router/constant/routes';

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const fallbackId = MOVIE_DETAIL_META.id ?? 1;
  const movieId = Number(id ?? fallbackId) || fallbackId;

  const {
    activeTab,
    handleClickTab,
    isDescriptionExpanded,
    handleToggleDescription,
  } = useMovieDetail();

  const { data: detailResponse } = useGetMovieDetailQuery(movieId);
  const { data: reviewsResponse } = useGetMovieReviewsQuery(movieId);

  const detail = detailResponse?.data;
  const reviewsData = reviewsResponse?.data;

  const movie = {
    id: detail?.id ?? MOVIE_DETAIL_META.id,
    title: detail?.title ?? MOVIE_DETAIL_META.title,
    tag: detail?.tag ?? MOVIE_DETAIL_META.tag,
    ageRating: detail?.ageRating ?? MOVIE_DETAIL_META.ageRating,
    releaseDate: detail?.releaseDate ?? MOVIE_DETAIL_META.releaseDate,
    runningTimeMinutes:
      detail?.runningTimeMinutes ?? MOVIE_DETAIL_META.runningTimeMinutes,
  };

  const stats = {
    reservationRank: detail?.rank ?? MOVIE_DETAIL_STATS.reservationRank,
    reservationSharePercent:
      detail?.marketShare ?? MOVIE_DETAIL_STATS.reservationSharePercent,
    totalAudienceText:
      detail?.totalAudience != null
        ? new Intl.NumberFormat('ko-KR', {
            notation: 'compact',
            maximumFractionDigits: 1,
          }).format(detail.totalAudience)
        : MOVIE_DETAIL_STATS.totalAudienceText,
    averageScore: detail?.rating ?? MOVIE_DETAIL_STATS.averageScore,
    totalReviewCount:
      reviewsData?.reviewCount ?? MOVIE_DETAIL_STATS.totalReviewCount,
  };

  const cumulativeAudienceText = stats.totalAudienceText;

  const openDayText = (() => {
    if (!detail?.releaseDate) return MOVIE_DETAIL_AUDIENCE_CARD.openDayText;

    const release = new Date(detail.releaseDate);
    if (Number.isNaN(release.getTime()))
      return MOVIE_DETAIL_AUDIENCE_CARD.openDayText;

    const now = new Date();
    const diffMs = now.getTime() - release.getTime();
    const diffDays = Math.max(1, Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1);

    return `개봉 ${diffDays}일차`;
  })();

  const dailyAudienceText = MOVIE_DETAIL_AUDIENCE_CARD.dailyAudienceText;
  const dailyCompareText = MOVIE_DETAIL_AUDIENCE_CARD.dailyCompareText;

  const fullDescription =
    detail?.description ?? MOVIE_DETAIL_DESCRIPTION.full;
  const shortDescription =
    detail?.summary ?? MOVIE_DETAIL_DESCRIPTION.short;
  const descriptionText = isDescriptionExpanded
    ? fullDescription
    : shortDescription;

  const totalReviewCountCompact = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(stats.totalReviewCount);

  const handleClickReserve = () => {
    navigate(ROUTES.MOVIE_RESERVATION, {
      state: { movieId: movie.id },
    });
  };

  return (
    <div className='min-h-screen'>
      <Header variant='movie' title={movie.title} />

      <Movie
        id={movie.id}
        title={movie.title}
        tag={movie.tag}
        ageRating={movie.ageRating}
        releaseDate={movie.releaseDate}
        runningTimeMinutes={movie.runningTimeMinutes}
      />

      <div className='flex flex-col p-[1.7rem]'>
        <section className='mt-[1rem]'>
          <div className='flex items-center justify-center gap-[1rem]'>
            <p className='flex items-center gap-[0.3rem]'>
              <span className='font-body1 text-gray-0'>예매 </span>
              <span className='font-body3 text-violet-200'>
                {stats.reservationRank}위
              </span>
              <span className='font-body1 text-gray-100'>
                ({stats.reservationSharePercent}%)
              </span>
            </p>
            <span className='font-body1 text-gray-0'> | </span>
            <p className='flex items-center gap-[0.3rem]'>
              <span className='font-body1 text-gray-0'> 관람 </span>
              <span className='font-body3 text-gray-0'>
                {stats.totalAudienceText}
              </span>
            </p>
            <span className='font-body1 text-gray-0'> | </span>
            <p className='flex items-center gap-[0.3rem]'>
              <span className='font-body1 text-gray-0'> 별점 </span>
              <span className='font-body3 text-violet-200'>
                {stats.averageScore}
              </span>
            </p>
          </div>
        </section>

        <Button
          variant='primary'
          className='mt-[1.8rem]'
          onClick={handleClickReserve}
        >
          바로예매
        </Button>

        <section className='mt-[3.9rem]'>
          <div className='flex w-full justify-between'>
            <p className='font-body1 text-gray-0'>{descriptionText}</p>
            <Button
              variant='sub'
              onClick={handleToggleDescription}
              className='self-end border-none'
            >
              {isDescriptionExpanded ? '접기' : '더보기'}
            </Button>
          </div>
        </section>
      </div>

      <div className='relative overflow-hidden'>
        <img
          src='/assets/img-banner1.svg'
          alt='이벤트 배너'
          className='h-[7.6rem] w-full object-cover'
        />
        <span
          className='absolute left-0 top-0 inline-flex items-center justify-center  px-[0.1875rem] py-[0.1875rem] rounded-br-[0.6rem] bg-blueGreen-500 font-label2 text-gray-0'
        >
          이벤트
        </span>
      </div>

      <section className='mt-[3.9rem] flex flex-col gap-[2.8rem]'>
        <TabContainer activeTab={activeTab}>
          <Tab
            text='상세정보'
            value='info'
            isActive={activeTab === 'info'}
            handleClickTab={handleClickTab}
          />
          <Tab
            text={`실관람평 (${totalReviewCountCompact})`}
            value='review'
            isActive={activeTab === 'review'}
            handleClickTab={handleClickTab}
          />
        </TabContainer>

        {activeTab === 'info' ? (
          <InfoSection
            movieId={movie.id}
            cumulativeAudienceText={cumulativeAudienceText}
            openDayText={openDayText}
            dailyAudienceText={dailyAudienceText}
            dailyCompareText={dailyCompareText}
          />
        ) : (
          <ReviewSection />
        )}
      </section>
    </div>
  );
}
