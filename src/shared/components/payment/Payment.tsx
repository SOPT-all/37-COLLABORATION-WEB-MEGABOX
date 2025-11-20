import { useState } from 'react';
import { cn } from "@utils/cn";
import UppArrow from '@assets/components/IconSystemUparrow';
import IconItemPlus from '@assets/components/IconItemPlus';
import IconCard from '@assets/components/IconCard';
import IconSimpleCard from '@assets/components/IconSimpleCard';
import Phone from '@assets/components/IconPhone';
import MyCard from '@assets/components/IconMyCard';

type PaymentMethodType =
  | 'credit-card'
  | 'simple-pay'
  | 'phone-pay'
  | 'account-pay';

const PAYMENT_METHODS = [
  { id: 'credit-card' as const, label: '신용카드', icon: IconCard },
  { id: 'simple-pay' as const, label: '간편결제', icon: IconSimpleCard },
  { id: 'phone-pay' as const, label: '휴대폰결제', icon: Phone },
  { id: 'account-pay' as const, label: '내통장결제', icon: MyCard },
];

const Payment = () => {
  const [activeTab, setActiveTab] = useState<boolean>(true);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType | null>(null);

  const handlePaymentMethodClick = (method: PaymentMethodType) => {
    if(method === 'simple-pay') {
      alert('간편 결제 모달 TODO');
    } else {
      setSelectedMethod(method);
    }
  }
  return (
    <section className='bg-white p-[1.6rem]'>
      {/* 헤더 */}
      <div className='mb-[2.5rem] flex items-center justify-between'>
        <h2 className='font-title2'>결제 수단</h2>
        <button
          onClick={() => setActiveTab(!activeTab)}
          className='flex items-center gap-[0.9rem]'
        >
          <span className='font-caption1 text-gray-400'>신용/체크카드</span>
          <UppArrow
            width={14}
            height={14}
            className={cn(
              'text-gray-300',
              'transition-transform',
              !activeTab && 'rotate-180'
            )}
          />
        </button>
      </div>
      {/* 중앙페이 */}
      {activeTab && (
        <>
          <div className='mb-[1.6rem]'>
            <button className='flex w-full items-center justify-between rounded-[0.4rem] border border-gray-300 px-[2rem] py-[0.6rem]'>
              <img src='/assets/img-joonang-logo.png' alt='JoongAng PAY' className='h-[3.2rem]'/>
              <IconItemPlus width={24} height={24} className='text-gray-500' />
            </button>
          </div>
          {/* 결제 방법 그리드 */}
          <div className='mb-[1.6rem] grid grid-cols-2 gap-[1.2rem]'>
            {PAYMENT_METHODS.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => handlePaymentMethodClick(method.id)}
                  className={cn(
                    'flex flex-col items-center gap-[1.2rem] rounded-[0.4rem] border px-[1rem] py-[1.2rem]',
                    selectedMethod === method.id
                      ? 'border-violet-600'
                      : 'border-gray-300'
                  )}
                >
                  <Icon width={30} height={30}
                    className={cn(
                      selectedMethod === method.id
                        ? 'text-violet-600'
                        : 'text-gray-700'
                    )}
                  />
                  <span
                    className={cn(
                      'font-button2',
                      selectedMethod === method.id
                        ? 'text-violet-600'
                        : 'text-gray-700'
                    )}
                  >
                    {method.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* toss 카드 */}
          <div className='mb-[1.6rem]'>
            <button></button>
          </div>
          {/* 라디오 그룹 */}
          <div>
            <button>
              <div></div>
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Payment
