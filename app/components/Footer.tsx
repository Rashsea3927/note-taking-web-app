import FooterItems from '@components/FooterItem';

const Footer = () => {
  return (
    <footer className='lg:hidden fixed bottom-0 w-full px-8 py-3 border-t-[1px] border-neutral-200 dark:border-neutral-800 shadow-light dark:shadow-dark bg-neutral-0 dark:bg-neutral-950'>
      <nav>
        <FooterItems />
      </nav>
    </footer>
  );
};

export default Footer;
