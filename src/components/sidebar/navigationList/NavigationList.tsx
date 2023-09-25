'use client';

import { FC } from 'react';
import HomeIcon from '@/svgs/HomeIcon';
import NavigationListItem from './NavigationListItem';

const NavigationList: FC = () => {
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
        link='/home'
      />
    </ul>
  );
};

export default NavigationList;
