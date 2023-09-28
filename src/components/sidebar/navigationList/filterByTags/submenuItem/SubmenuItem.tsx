/* eslint-disable max-len */
import Link from 'next/link';
import { FC, ComponentPropsWithoutRef } from 'react';
import { cn } from 'utils/generalUtils';

type TSubmenuItem = ComponentPropsWithoutRef<'div'> & {
  tagName: string;
  activeTag: string | null;
}

const SubmenuItem: FC<TSubmenuItem> = ({
  tagName,
  activeTag,
}) => (
  <li>
    <Link
      href={ `?tag=${tagName}` }
      scroll={ false }
      onClick={ (e) => e.stopPropagation() }
    >
      <span
        className={ cn('flex border-2 border-transparent cursor-pointer items-center w-full p-2 transition duration-75 rounded-lg pl-11 group text-zinc-800 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700', {
          'border-2 border-zinc-500 dark:border-slate-400': activeTag === tagName,
        }) }
      >
        { tagName }
      </span>
    </Link>
  </li>
);

export default SubmenuItem;
