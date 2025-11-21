import ImgTrailer1 from '@/../public/assets/@movies/img-trailer.png';
import ImgTrailer2 from '@/../public/assets/@movies/img-trailer2.png';
import ImgTrailer3 from '@/../public/assets/@movies/img-trailer3.png';
import ImgStillCut from '@/../public/assets/@movies/img-stillcut1.png';
import ImgPoster from '@/../public/assets/@movies/img-moviePoster.png';
import ImgGoods from '@/../public/assets/@movies/img-goods.png';

// 테스트용 더미 데이터(나중에 지울 예정)
const TRAILERS = [ImgTrailer1, ImgTrailer2, ImgTrailer3, ImgTrailer1, ImgTrailer2];

const POSTERS = [
  ImgStillCut,
  ImgPoster,
  ImgStillCut,
  ImgPoster,
  ImgStillCut,
  ImgPoster,
];

const GOODS = [
  {
    id: 1,
    title: '<체인소 맨> 특별 포스터',
    image: ImgGoods,
  },

];

export default function InfoSection() {
  return (
    <div className="bg-gray-900 px-6 pb-10 pt-2 text-gray-0">
      <section className="mb-8">
        <h2 className="mb-4 font-title3">누적관람</h2>

        <div
          className="
            relative flex items-stretch
            overflow-hidden rounded-[0.8rem]
            border border-violet-400
            bg-gray-800
            px-4 py-4
          "
          style={{ height: '10.5rem' }} 
        >
          <div
            aria-hidden
            className="
              pointer-events-none
              absolute -right-6 bottom-0
              h-[4.4rem] w-[4.4rem]
              rounded-full bg-violet-400
              blur-[38px]
            "
          />

          <div className="flex-1">
            <p className="font-body1 text-gray-400">누적 관객 수</p>
            <p className="mt-1 font-body4">285.0만</p>
            <p className="mt-1 font-caption1 text-gray-400">개봉 43일차</p>
          </div>

          <div className="mx-3 h-[5.8rem] w-px self-center bg-gray-200" />

          <div className="flex-1">
            <p className="font-body1 text-gray-400">일별 관객 수</p>
            <p className="mt-1 font-body4">24,611</p>
            <p className="mt-1 font-caption1 text-violet-300">
              전일대비 67.9% ▲
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-2 flex items-baseline gap-1.5">
          <h2 className="font-title3">예고편 / 트레일러</h2>
          <span className="font-title3 text-violet-500">{TRAILERS.length}</span>
        </div>

        <div className="overflow-x-auto pb-1">
          <div className="flex w-max gap-[0.75rem]">
            {TRAILERS.map((src, index) => (
              <div
                key={index}
                className="
                  flex shrink-0 items-center justify-center
                  overflow-hidden rounded-[0.8rem] bg-gray-800
                "
                style={{
                  width: '18.1875rem', 
                  height: '10.1875rem', 
                }}
              >
                <img
                  src={src}
                  alt={`예고편 ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-2 font-body1 text-gray-0">메인 예고편</p>
      </section>

      <section className="mb-8">
        <div className="mb-2 flex items-baseline gap-1.5">
          <h2 className="font-title3">포스터 / 스틸컷</h2>
          <span className="font-title3 text-violet-500">{POSTERS.length}</span>
        </div>

        <div className="overflow-x-auto pb-1">
          <div className="flex w-max gap-[0.75rem]">
            {POSTERS.map((src, index) => (
              <div
                key={index}
                className="
                  flex shrink-0 items-center justify-center
                  overflow-hidden rounded-[0.8rem] bg-gray-800
                "
                style={{
                  width: '29.6875rem',
                  height: '12.4375rem', 
                }}
              >
                <img
                  src={src}
                  alt={`포스터 / 스틸컷 ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <h2 className="font-title3">오리지널 굿즈</h2>
            <span className="font-title3 text-violet-500">{GOODS.length}</span>
          </div>

          <button
            type="button"
            className="
              inline-flex items-center justify-center
              rounded-[0.25rem]
              border border-gray-300
              px-[0.5rem] py-[0.4375rem]
              font-button1 text-gray-400
            "
          >
            소진현황
          </button>
        </div>

        <div className="grid grid-cols-3 gap-[0.875rem]">
          {GOODS.map((goods) => (
            <div key={goods.id} className="flex flex-col gap-[0.875rem]">
              <div
                className="
                  flex items-center justify-center
                  rounded-[0.375rem]
                  bg-[#647392]
                "
                style={{
                  height: '8.75rem', 
                  paddingTop: '1.9375rem', 
                  paddingBottom: '1.875rem', 
                  paddingLeft: '0.875rem',
                  paddingRight: '0.875rem', 
                }}
              >
                <img
                  src={goods.image}
                  alt={goods.title}
                  className="h-[4.9375rem] w-[7rem] object-cover"
                />
              </div>

              <p className="font-body1 text-gray-0">{goods.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
