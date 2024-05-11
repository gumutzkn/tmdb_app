import { useNavigate } from 'react-router-dom';

import footer_logo from '../assets/tmdb_footer.svg';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className='bg-[#03233E]'>
      <div className='mx-5 max-w-7xl xl:mx-auto py-10'>
        <div
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/');
          }}
          className='w-44 h-32 cursor-pointer bg-cover bg-no-repeat bg-center'
          style={{
            backgroundImage: `url(${footer_logo})`,
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
