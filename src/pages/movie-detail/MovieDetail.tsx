import { Header, Movie, Button } from '@components/index';
import { InfoSection, ReviewSection } from '@pages/movie-detail/@section';
import { useMovieDetail } from '@pages/movie-detail/hooks/use-movie-detail';
import {
  MOVIE_DETAIL_META,
  MOVIE_DETAIL_STATS,
} from '@pages/movie-detail/mock';
import {
  Tab,
  TabContainer,
} from '@pages/movie-detail/components/MovieDetailTabs';
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

        <Button variant='primary' className='mt-[1.8rem]'>
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

      <div className="relative overflow-hidden">
        <img
          src={ImgBanner}
          alt="이벤트 배너"
          className="h-[7.6rem] w-full object-cover"
        />
        <span
          className="
            absolute left-0 top-0 inline-flex
            items-center justify-center
            px-3 py-[3px]
            rounded-br-[0.6rem]
            bg-blueGreen-500
            font-label2 text-gray-0
          "
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
            text='실관람평'
            value='review'
            isActive={activeTab === 'review'}
            handleClickTab={handleClickTab}
          />
        </TabContainer>

        {activeTab === 'info' ? <InfoSection /> : <ReviewSection />}
      </section>
    </div>
  );
}
