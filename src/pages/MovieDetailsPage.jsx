import { useLoaderData } from 'react-router-dom';

import Actors from '../components/Actors';
import Details from '../components/Details';
import Tags from '../components/Tags';

const MovieDetailsPage = () => {
  const { movie, trailers, tags } = useLoaderData();
  const actors = movie.credits.cast.slice(0, 7);

  return (
    <>
      <Details movie={movie} trailers={trailers} />
      <Actors actors={actors} />
      <Tags tags={tags} />
    </>
  );
};

export default MovieDetailsPage;
