import { MOVIE_DETAIL_AUDIENCE_CARD } from '@pages/movie-detail/mock';
import { IconUparrow } from '@assets/index';
import { Button } from '@components/index';
import {
  TRAILERS,
  POSTERS,
  GOODS,
} from '@pages/movie-detail/constants/info-mock';

export default function InfoSection() {
  return (
    <div className='flex flex-col gap-[2.8rem] p-[1.7rem]'>
      <section className='flex flex-col gap-[1.4rem]'>
        <h2 className='font-title3 text-gray-0 mb-[1rem]'>누적관람</h2>
        <div className='border-gradient-1 flex justify-center gap-[2rem] p-[2rem]'>
          <div className='flex w-full flex-col gap-[1.3rem]'>
            <p className='font-body1 text-gray-0'>누적 관객 수</p>
            <p className='font-body4 text-gray-0'>
              {MOVIE_DETAIL_AUDIENCE_CARD.cumulativeAudienceText}
            </p>
            <p className='font-caption1 text-gray-400'>
              {MOVIE_DETAIL_AUDIENCE_CARD.openDayText}
            </p>
          </div>
          <div className='h-[9.3rem] w-[0.1rem] bg-gray-200' />
          <div className='flex w-full flex-col gap-[1.3rem]'>
            <p className='font-body1 text-gray-0'>일별 관객 수</p>
            <p className='font-body4 text-gray-0'>
              {MOVIE_DETAIL_AUDIENCE_CARD.dailyAudienceText}
            </p>
            <p className='font-caption1 flex items-center gap-[0.2rem] text-violet-300'>
              {MOVIE_DETAIL_AUDIENCE_CARD.dailyCompareText}
              <IconUparrow className='h-[1.2rem] w-[1.2rem] text-violet-300' />
            </p>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-[1.4rem]'>
        <div className='flex items-center gap-[0.6rem]'>
          <h2 className='font-title3 text-gray-0'>예고편 / 트레일러</h2>
          <span className='font-title3 text-violet-500'>{TRAILERS.length}</span>
        </div>
        <div className='scrollbar-hide w-full overflow-x-auto'>
          <div className='flex gap-[0.7rem]'>
            {TRAILERS.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`예고편 ${index + 1}`}
                className='h-[16.3rem] object-cover'
              />
            ))}
          </div>
        </div>
        <p className='font-body1 text-gray-0 mt-[0.9rem]'>메인 예고편</p>
      </section>

      <section className='flex flex-col gap-[1.4rem]'>
        <div className='flex items-center gap-[0.6rem]'>
          <h2 className='font-title3 text-gray-0'>포스터 / 스틸컷</h2>
          <span className='font-title3 text-violet-500'>{POSTERS.length}</span>
        </div>
        <div className='scrollbar-hide w-full overflow-x-auto'>
          <div className='flex gap-[0.7rem]'>
            {POSTERS.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`포스터 / 스틸컷 ${index + 1}`}
                className='h-[19.9rem] object-cover'
              />
            ))}
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-[1.4rem]'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[0.6rem]'>
            <h2 className='font-title3 text-gray-0'>오리지널 굿즈</h2>
            <span className='font-title3 text-violet-500'>{1}</span>
          </div>

          <Button variant='sub'>소진현황</Button>
        </div>

        <div className='flex flex-col gap-[0.8rem]'>
          <img
            src={GOODS.image}
            alt='오리지널 굿즈'
            className='h-[14em] w-[14rem] object-cover'
          />
          <p className='font-body1 text-gray-0 mt-[0.9rem]'>{GOODS.title}</p>
        </div>
      </section>
    </div>
  );
}
