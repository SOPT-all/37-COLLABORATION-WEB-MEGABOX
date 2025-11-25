import { useState } from 'react';
import {
  DiscountTabs,
  CouponGrid,
  PointGrid,
} from '@pages/payment/@section/discount-section/components';
import SectionHeader from '@pages/payment/components/SectionHeader';

interface DiscountSectionProps {
  selectedCoupon: string | null;
  selectedPoint: string | null;
  selectedPolicy: boolean;
  handleSelectedCoupon: (coupon: string) => void;
  handleSelectedPoint: (point: string) => void;
  handleSelectedPolicy: (policy: boolean) => void;
}

export default function DiscountSection({
  selectedCoupon,
  selectedPoint,
  selectedPolicy,
  handleSelectedCoupon,
  handleSelectedPoint,
  handleSelectedPolicy,
}: DiscountSectionProps) {
  const [showDiscount, setShowDiscount] = useState(false);
  const [activeTab, setActiveTab] = useState<'coupon' | 'point'>('coupon');

  const handleShowDiscount = () => {
    setShowDiscount(!showDiscount);
  };
  const handleTabChange = (tab: 'coupon' | 'point') => {
    setActiveTab(tab);
  };

  return (
    <section className='bg-gray-0 p-[1.6rem]' aria-labelledby='할인 세션'>
      <SectionHeader
        title='할인적용'
        subtitle='할인 수단을 선택하세요!'
        isOpen={showDiscount}
        handleShow={handleShowDiscount}
      />
      {showDiscount && (
        <>
          <DiscountTabs
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />

          {activeTab === 'coupon' && (
            <CouponGrid
              selectedCoupon={selectedCoupon}
              selectedPolicy={selectedPolicy}
              handleSelectedCoupon={handleSelectedCoupon}
              handleSelectedPolicy={handleSelectedPolicy}
            />
          )}
          {activeTab === 'point' && (
            <PointGrid
              selectedPoint={selectedPoint}
              handleSelectedPoint={handleSelectedPoint}
            />
          )}
        </>
      )}
    </section>
  );
}
