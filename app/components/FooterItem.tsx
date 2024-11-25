'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@/app/components/icons/HomeIcon';
import SearchIcon from '@/app/components/icons/SearchIcon';
import ArchivedIcon from '@/app/components/icons/ArchivedIcon';
import TagsIcon from '@/app/components/icons/TagsIcon';
import SettingsIcon from '@/app/components/icons/SettingsIcon';

const footerIcons = [
  {
    name: 'home',
    link: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'search',
    link: '/search',
    icon: <SearchIcon />,
  },
  {
    name: 'archived',
    link: '/archived',
    icon: <ArchivedIcon />,
  },
  {
    name: 'tags',
    link: '/tags',
    icon: <TagsIcon />,
  },
  {
    name: 'settings',
    link: '/settings',
    icon: <SettingsIcon />,
  },
];

const FooterItems = () => {
  const pathname = usePathname();
  return (
    <ul className='grid grid-cols-5'>
      {footerIcons.map((icon) => {
        return (
          <li
            key={icon.name}
            className='grid sm:border-r-[1px] last:border-none sm:border-neutral-100 sm:dark:border-neutral-800'
          >
            <Link
              href={icon.link}
              className={`justify-self-center flex flex-col items-center gap-1 rounded py-1 w-full sm:w-20 ${
                pathname === icon.link ? 'bg-blue-50 dark:bg-neutral-700' : ''
              }`}
            >
              {icon.icon}
              <p
                className={`max-sm:hidden text-xs capitalize ${
                  pathname === icon.link
                    ? 'text-blue-500'
                    : 'text-neutral-500 dark:text-neutral-400'
                }`}
              >
                {icon.name}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterItems;
