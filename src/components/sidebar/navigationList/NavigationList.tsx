import { FC } from 'react';
import HomeIcon from '@/svgs/HomeIcon';
import NavigationListItem from './NavigationListItem';

const NavigationList: FC = () => (
  <ul className='pt-2 pb-4 space-y-1 text-sm'>
    <NavigationListItem
      text='Home'
      Icon={ HomeIcon }
    />
  </ul>
);

export default NavigationList;
