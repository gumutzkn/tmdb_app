import { IoPlay } from 'react-icons/io5';

import { usePopup } from '../context/PopupContext';
import { formatRuntime } from '../utils';

const Details = ({ movie, trailers }) => {
  const { showPopup } = usePopup();

  const bgImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const movieImg = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const handleClick = () => {
    showPopup(trailers[0]);
  };

  return (
    <div
      className='bg-center py-10 bg-cover bg-no-repeat relative'
      style={{
        backgroundImage: `url(${bgImageUrl})`,
      }}
    >
      <div
        className='absolute top-0 bottom-0 left-0 right-0 z-20'
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(10.5, 52.5, 73.5, 1) calc((50vw - 170px) - 340px), rgba(10.5, 52.5, 73.5, 0.84) 50%, rgba(10.5, 52.5, 73.5, 0.84) 100%)',
        }}
      />
      <div
        id='detail_container'
        className='mx-5 max-w-7xl xl:mx-auto h-full relative z-30 flex flex-col md:flex-row gap-10 items-center'
      >
        <div
          id='detail_img'
          className='h-[450px] bg-red-500 w-full md:w-[300px] shrink-0 bg-center bg-cover bg-no-repeat rounded-xl'
          style={{
            backgroundImage: `url(${movieImg})`,
          }}
        />
        <div className='text-white'>
          <h1 className='text-white font-bold text-3xl'>
            {movie.title}
            <span className='font-normal opacity-80'>
              ({new Date(movie.release_date).getFullYear()})
            </span>
          </h1>
          <div className='text-sm mt-1'>
            <span>
              {movie.release_date} ({movie.origin_country[0]})
            </span>
            <span className='mx-2'>-</span>
            {movie.genres.map((genre, idx) => {
              if (movie.genres.length - 1 === idx)
                return <span key={idx}>{genre.name}</span>;
              return <span key={idx}>{genre.name}, </span>;
            })}
            <span className='mx-2'>-</span>
            <span>{formatRuntime(movie.runtime)}</span>
          </div>
          <div className='my-5 flex'>
            <div
              id='movie_rate'
              className='h-16 w-16 rounded-full bg-[#081C22] text-white font-bold flex items-center justify-center text-xl'
            >
              {Math.round(movie.vote_average * 10)}
              <span className='-mt-2 text-xs font-normal'>%</span>
            </div>
            <div className='font-bold ml-2 mt-2'>
              Üye <br /> Puanları
            </div>
          </div>
          <div
            onClick={handleClick}
            className='mb-8 bg-black/30 py-5 px-7 rounded-3xl w-fit flex items-center cursor-pointer gap-2 hover:opacity-85 transition-all duration-300'
          >
            <div className='-mt-[.2rem]'>
              <IoPlay size={17} />
            </div>
            <div className='font-bold'>Fragmanı Oynat</div>
          </div>
          <div className='italic opacity-80 mb-4'>
            {movie.tagline}
          </div>
          <div>
            <h3 className='font-semibold text-xl mb-2'>Özet</h3>
            <p className='text-sm leading-6'>{movie.overview}</p>
          </div>
          <div className='mt-7 flex gap-32'>
            <div className='text-[.9rem]'>
              <h3 className='font-bold'>
                {movie.credits.crew[0].name}
              </h3>
              <div>{movie.credits.crew[0].job}</div>
            </div>
            {movie.credits.crew[1] ? (
              <div className='text-[.9rem]'>
                <h3 className='font-bold'>
                  {movie.credits.crew[1].name}
                </h3>
                <div className=''>{movie.credits.crew[1].job}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
