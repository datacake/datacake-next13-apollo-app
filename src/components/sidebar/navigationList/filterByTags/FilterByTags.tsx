'use client';

import {
  FC, ComponentPropsWithoutRef, useState, MouseEvent,
} from 'react';
import { useSearchParams } from 'next/navigation';
import useDeviceStore from '@/stors/device/deviceStore';
import { selectFilterByTagsOptions } from '@/stors/device/deviceSelectors';
import { cn } from 'utils/generalUtils';
import SubmenuItem from './submenuItem';

type TFilterByTags = ComponentPropsWithoutRef<'li'>

const FilterByTags: FC<TFilterByTags> = () => {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag');
  const [ submenuOpen, setSubmenuOpen ] = useState(false);
  const filterByTagsOptions = useDeviceStore(selectFilterByTagsOptions);
  const handleSetSubmenuOpen = (e: MouseEvent) => {
    e.stopPropagation();
    setSubmenuOpen((prev) => !prev);
  };

  return (
    <li
      onClick={ (e) => handleSetSubmenuOpen(e) }
    >
      <button type='button' className='flex items-center w-full p-2 text-base transition duration-75 rounded-lg group text-zinc-800 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700' aria-controls='dropdown-example' data-collapse-toggle='dropdown-example'>
        <span className='flex-1 ml-3 text-left whitespace-nowrap'>Tags</span>
        <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
        </svg>
      </button>
      <ul
        id='dropdown-example'
        className={ cn('py-2 space-y-2', {
          hidden: !submenuOpen,
          'opacity-0': !submenuOpen,
        }) }
      >
        {filterByTagsOptions.length > 0 && filterByTagsOptions.map((tag) => (
          <SubmenuItem
            activeTag={ selectedTag }
            key={ tag }
            tagName={ tag }
          />
        ))}
      </ul>
    </li>
  );
};

export default FilterByTags;
