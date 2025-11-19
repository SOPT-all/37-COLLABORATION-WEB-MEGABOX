import Movie from '@components/movie/Movie';

export default function Home() {
  return (
    <div>
      <Movie
        id={1}
        title='나우 유 씨 미 3'
        tag='#애니메이션 #액션'
        ageRating={15}
        releaseDate='2024-11-15'
        runningTimeMinutes={100}
        handleClickCard={() => {}}
        className='cursor-pointer'
      />
    </div>
  );
}
