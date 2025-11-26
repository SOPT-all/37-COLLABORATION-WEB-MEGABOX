import { IconUparrow } from '@assets/index';
import { Button } from '@components/index';
import { MOVIES } from '@constants/movies';

interface InfoSectionProps {
  movieId: number;

  cumulativeAudienceText: string;
  openDayText: string;
  dailyAudienceText: string;
  dailyCompareText: string;
}

export default function InfoSection({
  movieId,
  cumulativeAudienceText,
  openDayText,
  dailyAudienceText,
  dailyCompareText,
}: InfoSectionProps) {

  const movieMedia = MOVIES[movieId] ?? {};
  const trailers = movieMedia.trailers ?? [];
  const posters = movieMedia.posters ?? [];
  const goods = movieMedia.goods ?? null;

  return (
    <div className='flex flex-col gap-[2.8rem] p-[1.7rem]'>
≈
      <section className='flex flex-col gap-[1.4rem]'>
        <h2 className='font-title3 text-gray-0 mb-[1rem]'>누적관람</h2>

        <div className='border-gradient-1 relative flex justify-center gap-[2rem] p-[2rem] rounded-[0.8rem] overflow-hidden'>
          <div className='pointer-events-none absolute -left-6 top-0 h-[4.4rem] w-[4.4rem] rounded-full bg-violet-400 blur-[2.375rem]' />
          <div className='pointer-events-none absolute -right-6 bottom-0 h-[4.4rem] w-[4.4rem] rounded-full bg-violet-400 blur-[2.375rem]' />

          <div className='flex w-full flex-col gap-[1.3rem]'>
            <p className='font-body1 text-gray-0'>누적 관객 수</p>
            <p className='font-body4 text-gray-0'>{cumulativeAudienceText}</p>
            <p className='font-caption1 text-gray-400'>{openDayText}</p>
          </div>

          <div className='h-[9.3rem] w-[0.1rem] bg-gray-200' />
          <div className='flex w-full flex-col gap-[1.3rem]'>
            <p className='font-body1 text-gray-0'>일별 관객 수</p>
            <p className='font-body4 text-gray-0'>{dailyAudienceText}</p>
            <p className='font-caption1 flex items-center gap-[0.2rem] text-violet-300'>
              {dailyCompareText}
              <IconUparrow className='h-[1.2rem] w-[1.2rem] text-violet-300' />
            </p>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-[1.4rem]'>
        <div className='flex items-center gap-[0.6rem]'>
          <h2 className='font-title3 text-gray-0'>예고편 / 트레일러</h2>
          <span className='font-title3 text-violet-500'>{trailers.length}</span>
        </div>

        <div className='scrollbar-hide w-full overflow-x-auto'>
          <div className='flex gap-[0.7rem]'>
            {trailers.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`예고편 ${index + 1}`}
                className='h-[16.3rem] object-cover'
              />
            ))}
          </div>
        </div>

        {trailers.length > 0 && (
          <p className='font-body1 text-gray-0 mt-[0.9rem]'>메인 예고편</p>
        )}
      </section>

      <section className='flex flex-col gap-[1.4rem]'>
        <div className='flex items-center gap-[0.6rem]'>
          <h2 className='font-title3 text-gray-0'>포스터 / 스틸컷</h2>
          <span className='font-title3 text-violet-500'>{posters.length}</span>
        </div>

        <div className='scrollbar-hide w-full overflow-x-auto'>
          <div className='flex gap-[0.7rem]'>
            {posters.map((src, index) => (
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

      {goods && (
        <section className='flex flex-col gap-[1.4rem]'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[0.6rem]'>
              <h2 className='font-title3 text-gray-0'>오리지널 굿즈</h2>
              <span className='font-title3 text-violet-500'>1</span>
            </div>
            <Button variant='sub'>소진현황</Button>
          </div>

          <div className='flex flex-col gap-[0.8rem]'>
            <img
              src={goods.image}
              alt='오리지널 굿즈'
              className='h-[14rem] w-[14rem] object-cover'
            />
            <p className='font-body1 text-gray-0 mt-[0.9rem]'>{goods.title}</p>
          </div>
        </section>
      )}
    </div>
  );
}
