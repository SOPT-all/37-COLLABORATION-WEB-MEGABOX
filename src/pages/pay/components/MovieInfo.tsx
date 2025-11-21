interface MovieInfoProps {
  movie: {
    id: number;
    title: string;
    showTime: string;
    theater: string;
    seats: number;
    posterUrl: string;
  };
}

const MovieInfo = ({ movie }: MovieInfoProps) => {
  return (
    <>
      <section className='bg-white p-[1.6rem]'>
        <div className='py-[0.6rem]'>
          <h2 className='font-title2 mb-[2.5rem]'>예매 정보</h2>
          <div className='flex gap-[1.3rem]'>
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className='h-[10.7rem] w-[7.5rem] rounded-[0.4rem] object-cover'
            />
            {/* 영화 정보 */}
            <div className='flex flex-col justify-items-start gap-[0.4rem]'>
              <h3 className='font-body3 text-gray-900'>{movie.title}</h3>
              <p className='font-caption1 text-gray-500'>{movie.showTime}</p>
              <p className='font-caption1 text-gray-500'>{movie.theater}</p>
              <p className='font-label2 text-violet-600'>성인 {movie.seats}</p>
            </div>
          </div>
        </div>
      </section>
      <div className='h-[0.8rem] bg-gray-100' />
    </>
  );
};

export default MovieInfo
