import { useForm } from 'react-hook-form';
import { zodResolver} from '@hookform/resolvers/zod';
import {
    discountFormDefaultValues,
    discountFormSchema,
    type DiscountFormData,
} from '@pages/payment/schemas/payment.schema';

export const usePaymentForm = () => {
    // useForm 설정
    const form = useForm<DiscountFormData>({
        resolver: zodResolver(discountFormSchema),
        defaultValues: discountFormDefaultValues,
        mode : 'onChange', // -> 입력 실시간 검증
    })
    // 필요 메소드 및 상태 추출
    const {
        trigger,
        // watch,
        formState: { errors, isValid },
        setValue,
    } = form;

    // 전체 폼 구독
    // const formData = watch();

    // const fields = {
    //     activeTab: formData.activeTab,
    //     selectedDiscountId: formData.selectedDiscountId,
    //     isChecked: formData.isChecked,
    // };

    // 토스트 메시지
    const fieldErrors = {
        selectedDiscountId: errors.selectedDiscountId?.message,
        isChecked: errors.isChecked?.message,
    }

    // 탭
    const handleActiveTab = (tab: DiscountFormData['activeTab']) => {
        setValue('activeTab', tab, {shouldValidate: true});
    }

    // 그리드 아이템
    const handleSelectedDiscountId = (id: DiscountFormData['selectedDiscountId']) => {
        setValue('selectedDiscountId', id, {shouldValidate: true})
    }

    // 체크박스
    const handleIsChecked = (id: DiscountFormData['isChecked']) => {
        setValue('isChecked', id, {shouldValidate: true})
    }

    const onSubmit = async(data: DiscountFormData) => {
        // 모든 필드 검증
        const isValid = await trigger();
        // 검증 실패
        if (!isValid) {
            return;
        }
        console.info('폼 데이터', data);
    };

    return {
        form,
        // formData,
        fieldErrors,
        isValid,
        onSubmit,
        handleActiveTab,
        handleSelectedDiscountId,
        handleIsChecked,
        // fields
    }
}