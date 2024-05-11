import { useNavigate } from 'react-router-dom';

import tmdb_logo from '../../assets/tmdb_logo.svg';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/')}
      className='w-44 h-16 cursor-pointer bg-contain bg-no-repeat bg-center'
      style={{
        backgroundImage: `url(${tmdb_logo})`,
      }}
    />
  );
};

export default Logo;
