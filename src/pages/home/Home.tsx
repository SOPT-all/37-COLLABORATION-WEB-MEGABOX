import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Header, Button, Spinner } from '@components/index';
import { useMovie } from '@/pages/home/hooks/use-movie';
import HomeClient from '@pages/home/Home.client';

export default function Home() {
  const { selectedMovie, items, handleClickItem, handleClickCard, handleClickReservation } = useMovie();

  return (
    <div className='flex max-h-screen flex-col overflow-hidden'>
      <Header variant='main' />
      <div className='flex-1 overflow-hidden'>
        <ErrorBoundary
          fallbackRender={() => (
            <div className='flex min-h-[60vh] items-center justify-center text-center text-gray-500'>
              영화 정보가 없습니다.
            </div>
          )}
        >
          <Suspense fallback={<Spinner />}>
            <HomeClient
              selectedMovie={selectedMovie}
              items={items}
              handleClickItem={handleClickItem}
              handleClickCard={handleClickCard}
            />
          </Suspense>
        </ErrorBoundary>
      </div>
      <footer className='fixed-center right-0 bottom-0 left-0 px-[1.7rem] pb-[4.9rem]'>
        <Button variant='primary' onClick={handleClickReservation}>
          바로 예매 하기
        </Button>
      </footer>
    </div>
  );
}
