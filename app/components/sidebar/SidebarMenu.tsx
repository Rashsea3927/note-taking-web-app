'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@components/icons/HomeIcon';
import ArchivedIcon from '@components/icons/ArchivedIcon';
import ChevronRightIcon from '@components/icons/ChevronRightIcon';

const SidebarMenu = () => {
  const pathname = usePathname();
  return (
    <ul className='grid gap-1 pb-2 border-b-[1px] border-neutral-200 dark:border-neutral-800'>
      <li
        className={`flex justify-between items-center py-2.5 px-3 rounded ${
          pathname === '/' ? 'bg-blue-50 dark:bg-neutral-700' : ''
        }`}
      >
        <span className='flex gap-2 items-center'>
          <HomeIcon />
          <Link href='/' className='text-sm'>
            All Notes
          </Link>
        </span>
        {pathname === '/' && <ChevronRightIcon />}
      </li>
      <li
        className={`flex justify-between py-2.5 px-3 ${
          pathname === '/archived' ? 'bg-blue-50 dark:bg-neutral-700' : ''
        }`}
      >
        <span className='flex gap-2 items-center'>
          <ArchivedIcon />
          <Link href='/archived' className='text-sm'>
            Archived Notes
          </Link>
        </span>
      </li>
    </ul>
  );
};

export default SidebarMenu;
