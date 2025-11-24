import DiscountHeader from '@pages/payment/section/DiscountSection/DiscountHeader';
import DiscountTabs from '@pages/payment/section/DiscountSection/DiscountTabs';
import DiscountContent from '@pages/payment/section/DiscountSection/DiscountContent';
import type { DiscountFormData } from '@/pages/payment/schemas/payment.schema';
import { useWatch, type UseFormReturn } from 'react-hook-form';

interface DiscountSectionProps {
  form: UseFormReturn<DiscountFormData>;
  handleActiveTab: (_tab: DiscountFormData['activeTab']) => void;
  handleSelectedDiscountId: (
    _id: DiscountFormData['selectedDiscountId']
  ) => void;
  handleIsChecked: (_checked: DiscountFormData['isChecked']) => void;
}

export const DiscountSection = ({
  form,
  handleActiveTab,
  handleSelectedDiscountId,
  handleIsChecked
}: DiscountSectionProps) => {
  const activeTab = useWatch({
    control: form.control,
    name: 'activeTab',
  });
  const selectedDiscountId = useWatch({
    control: form.control,
    name: 'selectedDiscountId',
  });
  const isChecked = useWatch({
    control: form.control,
    name: 'isChecked',
  });

  // 토글 핸들러
  const handleToggle = () => {
    if (activeTab) {
      handleActiveTab(null);
    }
  };

  return (
    <section className='bg-white p-[1.6rem]' aria-labelledby='할인 세션'>
      <DiscountHeader activeTab={activeTab} handleToggle={handleToggle} />
      <DiscountTabs activeTab={activeTab} handleTabChange={handleActiveTab} />
      <DiscountContent
        activeTab={activeTab}
        selectedDiscountId={selectedDiscountId}
        handleDiscountChange={handleSelectedDiscountId}
        isChecked={isChecked}
        handleCheckedChange={handleIsChecked}
      />
    </section>
  );
};

export default DiscountSection;
