import { useState } from 'react'

type TabType = 'coupon' | 'points';

export const DiscountSection = () => {
  const [activeTab, setActiveTab] = useState<TabType | null>(null);
  return (
    <section>
      <div>
        <h2>할인적용</h2>
        <span>할인 수단을 선택하세요</span>
      </div>
      {/* 탭 버튼 */}
      <div>
        <button onClick={() => setActiveTab('coupon')}>쿠폰/관람권/기타</button>
        <button onClick={() => setActiveTab('points')}>포인트</button>
      </div>
      {/* 탭 내용 */}
      <div>
        {activeTab === 'coupon' && <div>쿠폰 탭 내용</div>}
        {activeTab === 'point' && <div>포인트 탭 내용</div>}
      </div>
    </section>
  );
}

export default DiscountSection
