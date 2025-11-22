import { useState, useEffect } from 'react';

import ImgTrailer1 from '@/../public/assets/@movies/img-trailer.png';
import ImgTrailer2 from '@/../public/assets/@movies/img-trailer2.png';
import ImgTrailer3 from '@/../public/assets/@movies/img-trailer3.png';
import ImgStillCut from '@/../public/assets/@movies/img-stillcut1.png';
import ImgGoods from '@/../public/assets/@movies/img-goods.png';
import { MOVIE_DETAIL_AUDIENCE_CARD } from './mock';

// 테스트용 더미 데이터
const TRAILERS = [ImgTrailer1, ImgTrailer2, ImgTrailer3, ImgTrailer1, ImgTrailer2];
const POSTERS = [ImgStillCut, ImgStillCut, ImgStillCut];
const GOODS = [
  {
    id: 1,
    title: '<체인소 맨> 특별 포스터',
    image: ImgGoods,
  },
];

export default function InfoSection() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerImages, setViewerImages] = useState<string[]>([]);
  const [viewerIndex, setViewerIndex] = useState(0);

  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isViewerOpen]);

  const openViewer = (images: string[], index: number) => {
    setViewerImages(images);
    setViewerIndex(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => setIsViewerOpen(false);

  return (
    <div className="bg-gray-900 px-6 pb-[4rem] pt-2">
      <section className="mb-8">
        <h2 className="mb-4 font-title3 text-gray-0">누적관람</h2>

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
              blur-[3.8rem]
            "
          />

          <div className="flex-1">
            <p className="font-body1 text-gray-400">누적 관객 수</p>
            <p className="mt-1 font-body4 text-gray-0">
              {MOVIE_DETAIL_AUDIENCE_CARD.cumulativeAudienceText}
            </p>
            <p className="mt-1 font-caption1 text-gray-400">
              {MOVIE_DETAIL_AUDIENCE_CARD.openDayText}
            </p>
          </div>

          <div className="mx-3 h-[5.8rem] w-px self-center bg-gray-700" />

          <div className="flex-1">
            <p className="font-body1 text-gray-400">일별 관객 수</p>
            <p className="mt-1 font-body4 text-gray-0">
              {MOVIE_DETAIL_AUDIENCE_CARD.dailyAudienceText}
            </p>
            <p className="mt-1 font-caption1 text-violet-300">
              {MOVIE_DETAIL_AUDIENCE_CARD.dailyCompareText}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-2 flex items-baseline gap-[0.15rem]">
          <h2 className="font-title3 text-gray-0">예고편 / 트레일러</h2>
          <span className="font-title3 text-violet-500">{TRAILERS.length}</span>
        </div>

        <div className="overflow-x-auto pb-1 scrollbar-hide">
          <div className="flex w-max gap-[0.75rem]">
            {TRAILERS.map((src, index) => (
              <button
                type="button"
                key={index}
                className="
                  flex shrink-0 items-center justify-center
                  overflow-hidden rounded-[0.8rem] bg-gray-800
                  cursor-pointer
                "
                style={{
                  width: '29.1rem',
                  height: '16.3rem',
                }}
                onClick={() => openViewer(TRAILERS, index)}
              >
                <img
                  src={src}
                  alt={`예고편 ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <p className="mt-2 font-body1 text-gray-0">메인 예고편</p>
      </section>

      <section className="mb-8">
        <div className="mb-2 flex items-baseline gap-[0.15rem]">
          <h2 className="font-title3 text-gray-0">포스터 / 스틸컷</h2>
          <span className="font-title3 text-violet-500">{POSTERS.length}</span>
        </div>

        <div className="overflow-x-auto pb-1 scrollbar-hide">
          <div className="flex w-max gap-[0.75rem]">
            {POSTERS.map((src, index) => (
              <button
                type="button"
                key={index}
                className="
                  flex shrink-0 items-center justify-center
                  overflow-hidden rounded-[0.8rem] bg-gray-800
                  cursor-pointer
                "
                style={{
                  width: '47.5rem',
                  height: '19.9rem',
                }}
                onClick={() => openViewer(POSTERS, index)}
              >
                <img
                  src={src}
                  alt={`포스터 / 스틸컷 ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-baseline gap-[0.15rem]">
            <h2 className="font-title3 text-gray-0">오리지널 굿즈</h2>
            <span className="font-title3 text-violet-500">{GOODS.length}</span>
          </div>

          <button
            type="button"
            className="
              inline-flex items-center justify-center
              rounded-[0.25rem]
              border border-gray-300
              px-[1.2rem] py-[0.3rem]
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
                  height: '14rem',
                  paddingTop: '3.1rem',
                  paddingBottom: '3rem',
                  paddingLeft: '1.4rem',
                  paddingRight: '1.4rem',
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

      {isViewerOpen && viewerImages.length > 0 && (
        <div
          className="
          fixed-center top-0 bottom-0 z-50
        bg-black
          "
          onClick={closeViewer}
        >
          <div className="absolute right-4 top-4 flex flex-col items-end gap-1 text-gray-0">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeViewer();
              }}
              className="text-2xl leading-none"
            >
              ✕
            </button>

            <span className="text-xs">
              {viewerIndex + 1} / {viewerImages.length}
            </span>
          </div>

          <div
            className="flex h-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={viewerImages[viewerIndex]}
              alt=""
              className="max-h-[80%] w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
