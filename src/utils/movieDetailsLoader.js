import { fetchFromApi } from './fetchFromApi';

async function movieDetailsLoader({ params }) {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const movieId = params.movieId;

  const urls = {
    movieDetails: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`,
    trailers: `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    tags: `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${apiKey}`,
  };

  try {
    const [movieData, trailersData, tagsData] = await Promise.all([
      fetchFromApi(urls.movieDetails),
      fetchFromApi(urls.trailers),
      fetchFromApi(urls.tags),
    ]);

    const trailers = trailersData.results.filter(
      (trailer) =>
        trailer.site === 'YouTube' && trailer.type === 'Trailer'
    );

    return {
      movie: movieData,
      trailers,
      tags: tagsData.keywords,
    };
  } catch (error) {
    console.error(error.message);
    throw new Error('Error processing movie details loader');
  }
}

export default movieDetailsLoader;
