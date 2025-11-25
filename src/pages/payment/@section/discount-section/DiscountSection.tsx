import { useState } from 'react';
import {
  DiscountTabs,
  CouponGrid,
  PointGrid,
} from '@pages/payment/@section/discount-section/components';
import SectionHeader from '@pages/payment/components/SectionHeader';
import type { PaymentFormData } from '@pages/payment/schemas/payment.schema';

interface DiscountSectionProps {
  selectedCoupon: PaymentFormData['selectedCoupon'];
  selectedPoint: PaymentFormData['selectedPoint'];
  selectedPolicy: PaymentFormData['selectedPolicy'];
  handleSelectedCoupon: (_coupon: PaymentFormData['selectedCoupon']) => void;
  handleSelectedPoint: (_point: PaymentFormData['selectedPoint']) => void;
  handleSelectedPolicy: (_policy: PaymentFormData['selectedPolicy']) => void;
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
    if(activeTab === tab && showDiscount) {
      setShowDiscount(false);
    } else {
      setActiveTab(tab);
      setShowDiscount(true);
    }
  };

  return (
    <section className='bg-gray-0 p-[1.6rem]' aria-labelledby='할인 세션'>
      <div className='mb-[2.5rem]'>
        <SectionHeader
          title='할인적용'
          subtitle='할인 수단을 선택하세요!'
          isOpen={showDiscount}
          handleShow={handleShowDiscount}
        />
      </div>
      <DiscountTabs
        activeTab={activeTab}
        isOpen={showDiscount}
        handleTabChange={handleTabChange}
      />
      {showDiscount && (
        <>

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
