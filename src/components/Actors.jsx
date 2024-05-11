import ActorCard from './ui/ActorCard';

const Actors = ({ actors }) => {
  return (
    <div className='my-10 mx-5 max-w-7xl xl:mx-auto'>
      <h1 className='text-lg font-semibold'>Öne Çıkan Oyuncular</h1>
      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 mt-4'>
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default Actors;
