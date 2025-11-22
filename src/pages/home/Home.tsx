import { useEffect } from 'react';
import { Header, Button, Spinner } from '@components/index';
import { useMovie } from '@/pages/home/hooks';
import HomeClient from './Home.client';
import { useToastStore } from '@/shared/store/toast';

export default function Home() {
  const {
    selectedMovie,
    items,
    handleClickItem,
    handleClickCard,
    isPending,
    isError,
  } = useMovie();
  const showToast = useToastStore(state => state.showToast);

  useEffect(() => {
    if (isError) {
      showToast('영화 정보를 불러오는 중 오류가 발생했습니다.');
    }
  }, [isError, showToast]);

  return (
    <div>
      <Header variant='main' />
      {isPending ? (
        <div className='mt-[20rem]'>
          <Spinner />
        </div>
      ) : (
        <HomeClient
          isError={isError}
          selectedMovie={selectedMovie}
          items={items}
          handleClickItem={handleClickItem}
          handleClickCard={handleClickCard}
        />
      )}
      <footer className='fixed-center right-0 bottom-0 left-0 px-[1.7rem] pb-[4.9rem]'>
        <Button variant='primary' onClick={handleClickCard}>
          바로 예매 하기
        </Button>
      </footer>
    </div>
  );
}
