import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <ul className='relative flex space-x-8 items-center text-white'>
      <li>
        <NavLink className='custom-link' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className='custom-link' to='about'>
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
