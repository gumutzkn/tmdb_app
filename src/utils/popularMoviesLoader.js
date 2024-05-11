import { fetchFromApi } from './fetchFromApi';

async function popularMoviesLoader() {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  try {
    const moviesData = await fetchFromApi(popularMoviesUrl);
    return moviesData;
  } catch (error) {
    console.error(error.message);
    throw new Error('Error processing popular movies loader');
  }
}

export default popularMoviesLoader;
