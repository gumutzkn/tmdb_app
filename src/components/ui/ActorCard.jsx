const ActorCard = ({ actor }) => {
  const actorImg = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <div className='h-[260px] w-full bg-white rounded-xl overflow-hidden shadow-actor'>
      <div
        className='h-[170px] bg-cover bg-no-repeat bg-center'
        style={{
          backgroundImage: `url(${actorImg})`,
        }}
      />
      <div className='pl-4 pt-3'>
        <h1 className='font-bold text-[.9rem]'>
          {actor.original_name}
        </h1>
        <h2 className='text-[.8rem] mt-[-.15rem]'>
          {actor.character}
        </h2>
      </div>
    </div>
  );
};

export default ActorCard;
