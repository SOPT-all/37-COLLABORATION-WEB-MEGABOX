import { useState } from 'react';
import { IconStarFill } from '@assets/index';
import Review from '@components/review/Review';
import Modal from '@components/@modal/Modal';
import { useModal } from '@components/@modal/hooks/use-modal';
import Divider from '@components/divider/Divider';
import Tooltip from '@components/tooltip/Tooltip';

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(true);

  const maxQuantity = 10;
  const { isOpen, handleOpenChange, quantity, handleDecrease, handleIncrease } =
    useModal(maxQuantity);

  return (
    <div>
      <div className="p-8">
        {/* 툴팁: 테스트 후 삭제 예정 */}
        {showTooltip && (
          <Tooltip
            message="설명하고 싶은 내용을 적어주세요"
            handleClose={() => setShowTooltip(false)}
          />
        )}

        <Divider />
        {/* TODO : 테스트 후 삭제 예정 */}
        {/* 텍스트 색상 테스트 */}
        <h1 className="mb-4 font-bold text-violet-700">Violet 700</h1>
        <h1 className="mb-4 font-bold text-violet-600">Violet 600</h1>
        <h1 className="mb-4 font-bold text-violet-500">Violet 500</h1>
        <h1 className="mb-4 font-bold text-violet-400">Violet 400</h1>
        <h1 className="mb-4 font-bold text-violet-300">Violet 300</h1>
        <h1 className="mb-8 font-bold text-violet-200">Violet 200</h1>
        <h1 className="mb-8 font-bold text-red-500">Sub-Red-200</h1>
        <h1 className="mb-8 font-bold text-blue-500">Sub-Blue-200</h1>
        <h1 className="mb-8 font-bold text-blueGreen-500">
          Sub-blueGreen-200
        </h1>

        {/* 그라디언트 테스트 */}
        <div className="gradient-1 mb-4 h-64 w-64 rounded-3xl" />
        <div className="gradient-2 mb-4 h-64 w-64 rounded-3xl" />
        <div className="gradient-3 h-64 w-64 rounded-3xl" />
      </div>

      <IconStarFill className="text-red-500" />

      <div className="p-[2rem]">
        <Review
          content="영화를 2회차 시청하는 건 이 작품이 첨입니다. 너무 재밌어요. 초반엔 달달한 로맨스를 풍기다 전투씬부터는 화려하고 역동작인 액션씬이라 보는 재미가 있었습니다. 만족 100입니다"
          rating={4.3}
          createdAt={new Date()}
          nickname="test"
        />
      </div>

      {/* 모달 테스트용 버튼 */}
      <button
        className="rounded-md bg-violet-500 px-4 py-2 text-white"
        onClick={() => handleOpenChange(true)}
      >
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        handleOpenChange={handleOpenChange}
        movieTitle="영화 제목"
        date="2025.11.18(수) 19:00 ~ 21:00"
        location="강남/르 리클라이너 1관 2D(자막)"
        quantity={quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handleClickPayment={() => {}}
      />
    </div>
  );
}
