import heroImg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div
      className='h-[400px] mx-5 max-w-7xl xl:mx-auto relative flex flex-col justify-center pl-10 text-white bg-red-50 bg-center bg-no-repeat bg-cover'
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-blue-400/30' />
      <h1 className='relative z-30 text-5xl font-bold mb-5'>
        Hoş Geldiniz!
      </h1>
      <h2 className='relative z-30 font-bold text-2xl'>
        Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi
        keşfedin.
      </h2>
    </div>
  );
};

export default Hero;
