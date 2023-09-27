'use client';

import { FC } from 'react';
import HomeIcon from '@/svgs/HomeIcon';
import { usePathname } from 'next/navigation';
import NavigationListItem from './NavigationListItem';
import FilterByTags from './filterByTags';

const NavigationList: FC = () => {
  const path = usePathname();
  const logout = () => {
    localStorage.removeItem('user_token');
  };

  return (
    <ul className='pt-2 pb-4 space-y-1 text-sm'>
      <NavigationListItem
        text='Logout'
        onClick={ logout }
        link='/login'
      />
      <NavigationListItem
        text='Home'
        Icon={ HomeIcon }
        link='/home?tag=All'
      />
      { path === '/home' && <FilterByTags /> }
    </ul>
  );
};

export default NavigationList;
