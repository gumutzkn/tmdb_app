import { useNavigate } from 'react-router-dom';

import tmdb_logo from '../../assets/tmdb_logo.svg';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/')}
      className='w-44 h-16 cursor-pointer bg-contain bg-no-repeat bg-center'
    >
      <img
        src={tmdb_logo}
        alt='Logo'
        className='h-full w-full object-contain'
      />
    </div>
  );
};

export default Logo;
