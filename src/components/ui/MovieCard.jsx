import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div
      className='cursor-pointer'
      onClick={() => {
        window.scrollTo(0, 0);
        navigate(`/movie/${movie.id}`);
      }}
    >
      <div
        className='h-[225px] rounded-xl bg-cover bg-no-repeat bg-center'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div>
        <div className='h-9 w-9 rounded-full bg-[#081C22] text-white font-bold flex items-center justify-center text-sm ml-3 -mt-5'>
          {Math.round(movie.vote_average * 10)}{' '}
          <span className='-mt-1 text-[7px]'>%</span>
        </div>
        <h1 className='text-wrap ml-3 mt-2 font-bold text-sm'>
          {movie.title}
        </h1>
        <h2 className='ml-3 text-sm mt-1'>{movie.release_date}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
