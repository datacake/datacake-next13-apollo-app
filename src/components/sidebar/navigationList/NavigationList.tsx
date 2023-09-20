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
        Icon={ HomeIcon }
        onClick={ logout }
        link='/login'
      />
    </ul>
  );
};

export default NavigationList;
