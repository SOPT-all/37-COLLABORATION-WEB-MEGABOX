import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  paymentMethodSchema,
  paymentMethodDefaultValues,
  type PaymentMethodFormData,
} from './schema/pay.schema';
import MovieInfo from '../payment/components/MovieInfo';
import PaymentBtn from '../payment/components/PaymentBtn';
import PaymentMethodSection from './section';
import PaymentAmountSection from '../payment/components/PaymentAmountSection';

const PaymentInfo = () => {
  const form = useForm<PaymentMethodFormData>({
    resolver: zodResolver(paymentMethodSchema),
    defaultValues: paymentMethodDefaultValues,
  });

  const onSubmit = (data: PaymentMethodFormData) => {
    console.log('폼 데이터', data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <MovieInfo
        movie={{
          id: 1,
          title: '위키드:포 굿',
          showTime: '2025.11.19(수)10:00~12:27',
          theater: '강남/르릴클라이너1관·2D(자막)',
          seats: 2,
          posterUrl: '/assets/@movies/img-moviePoster.png',
        }}
      />
      <PaymentMethodSection form={form} />
      <PaymentAmountSection
        productAmount={24000}
        discountAmount={1000}
        deductionAmount={0}
        totalAmount={23000}
      />
      <PaymentBtn totalAmount={23000}/>
    </form>
  );
};

export default PaymentInfo;
