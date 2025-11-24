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
        handleSubmit, 
        setValue, 
        trigger, 
        watch, 
        formState: { errors, isValid },
        setError,
    } = form;

    // 전체 폼 구독
    const formData = watch();

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
        formData, 
        errors,
        isValid,
        onSubmit,
        setValue,
        trigger,
        setError,
    }
}