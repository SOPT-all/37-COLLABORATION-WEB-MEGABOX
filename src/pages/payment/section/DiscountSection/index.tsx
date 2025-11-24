import { useController, type UseFormReturn } from 'react-hook-form';
import type { DiscountFormData } from '@/pages/payment/schemas/payment.schema';
import DiscountHeader from '@pages/payment/section/DiscountSection/DiscountHeader';
import DiscountTabs from '@pages/payment/section/DiscountSection/DiscountTabs';
import DiscountContent from '@pages/payment/section/DiscountSection/DiscountContent';

interface DiscountSectionProps {
  form: UseFormReturn<DiscountFormData>;
}

export const DiscountSection = ({ form }: DiscountSectionProps) => {
  // 탭 컨트롤러
  const {
    field: { value: activeTab, onChange: handleTabChange },
  } = useController({
    name: 'activeTab',
    control: form.control,
  });

  // 그리드 아이템 컨트롤러
  const {
    field: { value: selectedDiscountId, onChange: handleDiscountChange },
  } = useController({
    name: 'selectedDiscountId',
    control: form.control,
  });

  // 체크박스 컨트롤러
  const {
    field: { value: isChecked, onChange: handleCheckedChange },
  } = useController({
    name: 'isChecked',
    control: form.control,
  });

  // 토글 핸들러
  const handleToggle = () => {
    if (activeTab) {
      handleTabChange(null);
    }
  };

  return (
    <section className='bg-white p-[1.6rem]' aria-labelledby='할인 세션'>
      <DiscountHeader activeTab={activeTab} handleToggle={handleToggle} />
      <DiscountTabs activeTab={activeTab} handleTabChange={handleTabChange} />
      <DiscountContent
        activeTab={activeTab}
        selectedDiscountId={selectedDiscountId}
        handleDiscountChange={handleDiscountChange}
        isChecked={isChecked}
        handleCheckedChange={handleCheckedChange}
      />
    </section>
  );
};

export default DiscountSection;
