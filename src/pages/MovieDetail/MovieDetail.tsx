import { useState } from 'react';
import Header from '@components/header/Header';
import Movie from '@components/movie/Movie';
import Button from '@components/button/Button';

import MovieDetailTabs from './MovieDetailTabs';
import InfoSection from './InfoSection';
import ReviewSection from './ReviewSection';

import ImgBanner from '@/../public/assets/img-Banner1.png';

type MovieDetailTab = 'info' | 'review';

// 설명 문구(나중에 지울 예정)
const FULL_DESCRIPTION =
  "인기 애니메이션 '체인소 맨' 첫 공식 극장판 국내 상륙! 압도적 배틀 액션이 스크린에서 폭발한다! 압도적 배틀 액션이 스크린에서 폭발한다! 압도적 배틀 액션이 스크린에서 폭발한다!";
const SHORT_DESCRIPTION =
  "인기 애니메이션 '체인소 맨' 첫 공식 극장판 국내 상륙! 압도적 배틀 액션이 스크린에서 폭발한다!…";

export default function MovieDetail() {
  const [activeTab, setActiveTab] = useState<MovieDetailTab>('info');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const movieId = 1;
  const descriptionText = isDescriptionExpanded
    ? FULL_DESCRIPTION
    : SHORT_DESCRIPTION;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-0">
      <Header variant="movie" title="극장판 체인소 맨: 레제편" />

      <main className="bg-gray-900 pb-[4rem]">
        <section>
          <Movie
            id={movieId}
            title="극장판 체인소 맨: 레제편"
            tag="#애니메이션 #액션"
            ageRating={15}
            releaseDate="2025.09.24"
            runningTimeMinutes={100}
          />
        </section>

        <section className="bg-gray-900 px-6 pt-4 pb-3">
          <p className="text-center">
            <span className="font-body1 text-gray-0">예매 </span>
            <span className="font-body3 text-violet-200">2위</span>
            <span className="font-body1 text-gray-100"> (13.2%)</span>

            <span className="font-body1 text-gray-0"> | 관람 </span>
            <span className="font-body3 text-gray-0">285.0만</span>

            <span className="font-body1 text-gray-0"> | 별점 </span>
            <span className="font-body3 text-violet-200">9.5</span>
          </p>
        </section>

        <section className="bg-gray-900 px-6 pb-5">
          <Button variant="primary">바로예매</Button>
        </section>

        <section className="bg-gray-900 px-6 pb-[2.875rem]">
          <div className="flex gap-3">
            <p className="flex-1 font-body1 text-gray-0">
              {descriptionText}
            </p>

            <button
              type="button"
              className="self-end font-button2 text-gray-400"
              onClick={() =>
                setIsDescriptionExpanded((prev) => !prev)
              }
            >
              {isDescriptionExpanded ? '접기' : '더보기'}
            </button>
          </div>
        </section>

        <section className="bg-gray-900 pb-3">
          <div className="relative overflow-hidden">
            <img
              src={ImgBanner}
              alt="체인소 맨: 레제편 개봉 이벤트 배너"
              className="h-[76px] w-full object-cover"
            />

            <span
              className="
                absolute left-0 top-0 inline-flex
                items-center justify-center
                px-3 py-[3px]
                // rounded-br-[0.6rem]
                bg-blueGreen-500
                font-label2 text-gray-0
              "
            >
              이벤트
            </span>
          </div>
        </section>

        <section>
          <MovieDetailTabs
            activeTab={activeTab}
            onChange={setActiveTab}
            reviewCount={13298}
          />
          {activeTab === 'info' ? <InfoSection /> : <ReviewSection />}
        </section>
      </main>
    </div>
  );
}
