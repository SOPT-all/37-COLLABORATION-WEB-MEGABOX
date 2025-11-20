import { useState } from 'react';
import { cn } from "@utils/cn";
import UppArrow from '@assets/components/IconSystemUparrow';

type PaymentMethodType =
  | 'credit-card'
  | 'simple-pay'
  | 'phone-pay'
  | 'account-pay';

const PAYMENT_METHODS = [
  { id: 'credit-card' as const, label: '신용카드' },
  { id: 'simple-pay' as const, label: '간편결제' },
  { id: 'phone-pay' as const, label: '휴대폰결제' },
  { id: 'account-pay' as const, label: '내통장결제' },
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
      { activeTab && (
        <>
          <div>
            <button>
              <span>JoonAng PAY</span>
            </button>
          </div>
          {/* 결제 방법 그리드 */}
          <div className='mb-[1.6rem] grid grid-cols-2 gap-[1.2rem]'>
            {PAYMENT_METHODS.map(method => (
              <button
                key={method.id}
                onClick={() => handlePaymentMethodClick(method.id)}
                className={cn(
                  'flex flex-col items-center gap-[1.2rem] rounded-[0.4rem] border p-[2.4rem]',
                  selectedMethod === method.id
                    ? 'border-violet-600'
                    : 'border-gray-300'
                )}
              >
                <span
                  className={cn(
                    'font-body2',
                    selectedMethod === method.id
                      ? 'text-violet-600'
                      : 'text-gray-700'
                  )}
                >
                  {method.label}
                </span>
              </button>
            ))}
          </div>

          {/* toss 카드 */}
          <div>
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
