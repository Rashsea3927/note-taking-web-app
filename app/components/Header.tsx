import Logo from '@components/Logo';
import Sidebar from '@components/sidebar/Sidebar';

const Header = () => {
  return (
    <header className='px-4 py-3 sm:px-8 sm:py-6 lg:fixed lg:py-3 lg:px-4 lg:w-[272px] lg:h-screen lg:border-r-[1px] lg:border-neutral-200 lg:dark:border-neutral-800'>
      <Logo />
      <Sidebar />
    </header>
  );
};

export default Header;
