import { forwardRef, useState } from 'react';
import * as React from 'react';
import { cn } from "@utils/cn";
import UppArrow from '@assets/components/IconSystemUparrow';
import IconItemPlus from '@assets/components/IconItemPlus';
import IconCard from '@assets/components/IconCard';
import IconSimpleCard from '@assets/components/IconSimpleCard';
import Phone from '@assets/components/IconPhone';
import MyCard from '@assets/components/IconMyCard';
import IconRadio from '@assets/components/IconChooseFill'
import IconCheckFill from '@assets/components/IconCheckFill';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';

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

const CARD_OPTIONS = [
  { value: 'toss-card', label: '토스카드' },
  { value: 'kb-card', label: '국민카드' },
  { value: 'kakao-bank', label: '카카오뱅크' },
  { value: 'nh-bank', label: '농협은행' },
  { value: 'hana-bank', label: '하나은행' },
  { value: 'ibk-bank', label: '기업은행' },
];

const SelectItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={cn(
        'relative flex cursor-pointer items-center rounded-[0.4rem] px-[1rem] py-[1.2rem] font-body2 text-gray-900',
        'focus:bg-gray-100 outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});

SelectItem.displayName = 'SelectItem';

const Payment = () => {
  const [activeTab, setActiveTab] = useState<boolean>(true);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType | null>(null);
  const [paymentType, setPaymentType] = useState<'isp' | 'general'>('isp');
  const [isRefundAgreed, setIsRefundAgreed] = useState(false);

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
              <img
                src='/assets/img-joonang-logo.png'
                alt='JoongAng PAY'
                className='h-[3.2rem]'
              />
              <IconItemPlus width={24} height={24} className='text-gray-500' />
            </button>
          </div>
          {/* 결제 방법 그리드 */}
          <div className='mb-[2rem] grid grid-cols-2 gap-[1.2rem]'>
            {PAYMENT_METHODS.map(method => {
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
                  <Icon
                    width={30}
                    height={30}
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
              );
            })}
          </div>

          {/* 카드 */}
          <div className='mb-[1rem]'>
            <Select.Root>
              <Select.Trigger className='font-button2 flex w-full items-center justify-between rounded-[0.4rem] border border-gray-300 px-[1rem] py-[1.2rem]'>
                <Select.Value placeholder='카드 선택하기' />
                <Select.Icon>
                  <ChevronDownIcon className='text-gray-300' />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className='overflow-hidden rounded-[0.8rem] border border-gray-300 bg-white shadow-lg'>
                  <Select.Viewport className='p-[0.8rem]'>
                    {CARD_OPTIONS.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          {/* 라디오 그룹 */}
          <div className='mb-[2.2rem] flex gap-[0.8rem]'>
            <button
              onClick={() => setPaymentType('isp')}
              className='flex items-center gap-[0.5rem]'
            >
              <IconRadio
                width={18}
                height={18}
                className={
                  paymentType === 'isp' ? 'text-violet-600' : 'text-gray-300'
                }
              />
              <span className='font-button2 text-gray800'>ISP</span>
            </button>
            <button
              onClick={() => setPaymentType('general')}
              className='flex items-center gap-[0.5rem]'
            >
              <IconRadio
                width={18}
                height={18}
                className={
                  paymentType === 'general'
                    ? 'text-violet-600'
                    : 'text-gray-300'
                }
              />
              <span className='font-button2 text-gray800'>일반결제</span>
            </button>
          </div>
          {/* 이벤트 배너 */}
          <div className='rounded-[0.4rem] bg-gray-100 px-[1rem] py-[1.3rem]'>
            <div className='flex items-center gap-[0.2rem]'>
              <img
                src='/assets/img-toss-logo.png'
                alt='toss-payments'
                className='h-[2.9rem]'
              />
              <span className='font-caption1 text-gray-500'>
                11월 토스페이 생애 첫 결제 시 1천원 즉시 할인
              </span>
            </div>
            <div className='flex items-center gap-[3.3rem]'>
              <img
                src='/assets/img-010Pay-logo.png'
                alt='010Pay'
                className='h-[1.9rem]'
              />
              <span className='font-caption1 text-gray-500'>
                1.5만원 이상 내통장결제 시 굿즈 증정! (이벤트 탭 확인)
              </span>
            </div>
          </div>
          {/* 취소/환불 정책 */}
          <div className='mt-[2.2rem]'>
            <button
              onClick={() => setIsRefundAgreed(!isRefundAgreed)}
              className='flex items-center gap-[0.6rem]'
            >
              <IconCheckFill
                width={18}
                height={18}
                className={cn(
                  'transition-colors',
                  isRefundAgreed ? 'text-violet-600' : 'text-gray-300'
                )}
              />
              <span className='font-caption2 text-gray-800'>
                취소/환불 정첵에 대한 동의
              </span>
            </button>
            <div className='mt-[1.6rem] space-y-[1.4rem] border-t border-gray-200 pt-[1.6rem]'>
              <p className='font-caption3 text-gray-400 mb-[0.9rem]'>
                - 온라인 예매는 영화 상영시간 20분전까지 취소 가능하며, 20분
                이후 현장 취소만 가능합니다.
              </p>
              <p className='font-caption3 text-gray-400'>
                - 현장 취소 시 영화 상영시간 이전까지만 가능합니다.
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Payment
