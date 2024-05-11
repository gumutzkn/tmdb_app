import MovieCard from './ui/MovieCard';

const PopularMovies = ({ movies }) => {
  if (!movies) {
    return <div>Loading movies...</div>;
  }

  return (
    <div className='mt-6 mb-24 mx-5 max-w-7xl xl:mx-auto'>
      <h1 className='text-xl font-semibold mb-4'>Trend</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
