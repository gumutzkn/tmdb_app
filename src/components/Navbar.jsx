import Logo from './ui/Logo';
import Links from './Links';

const Navbar = () => {
  return (
    <header className='bg-[#032541] py-2'>
      <nav className='mx-5 max-w-7xl xl:mx-auto flex justify-between'>
        <Logo />
        <Links />
      </nav>
    </header>
  );
};

export default Navbar;
