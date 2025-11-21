import { useController, type UseFormReturn } from 'react-hook-form';
import type { DiscountFormData } from '@pages/Payment/schemas/payment.schema';
import DiscountHeader from './DiscountHeader';
import DiscountTabs from './DiscountTabs';
import DiscountContent from './DiscountContent';

interface DiscountSectionProps {
  form: UseFormReturn<DiscountFormData>;
}

export const DiscountSection = ({ form }: DiscountSectionProps) => {
  // 탭 컨트롤러
  const {
    field: { value: activeTab, onChange: onTabChange },
  } = useController({
    name: 'activeTab',
    control: form.control,
  });

  // 그리드 아이템 컨트롤러
  const {
    field: { value: selectedDiscountId, onChange: onDiscountChange },
  } = useController({
    name: 'selectedDiscountId',
    control: form.control,
  });

  // 체크박스 컨트롤러
  const {
    field: { value: isChecked, onChange: onCheckedChange },
  } = useController({
    name: 'isChecked',
    control: form.control,
  });

  // 토글 핸들러
  const handleToggle = () => {
    if (activeTab) {
      onTabChange(null);
    }
  };

  return (
    <section className='bg-white p-[1.6rem]' aria-labelledby='할인 세션'>
      <DiscountHeader activeTab={activeTab} onToggle={handleToggle} />
      <DiscountTabs activeTab={activeTab} onTabChange={onTabChange} />
      <DiscountContent
        activeTab={activeTab}
        selectedDiscountId={selectedDiscountId}
        onDiscountChange={onDiscountChange}
        isChecked={isChecked}
        onCheckedChange={onCheckedChange}
      />
    </section>
  );
};

export default DiscountSection;
