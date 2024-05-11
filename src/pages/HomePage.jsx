import { useLoaderData } from 'react-router-dom';

import PopularMovies from '../components/PopularMovies';
import Hero from '../components/Hero';

const HomePage = () => {
  const data = useLoaderData();
  const movies = data.results;

  return (
    <>
      <Hero />
      <PopularMovies movies={movies} />
    </>
  );
};

export default HomePage;
