import Link from 'next/link';
import { FC, HTMLAttributes, SVGProps } from 'react';

interface INavigationListItem extends HTMLAttributes<HTMLLIElement> {
  link?: string;
  text: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

const NavigationListItem: FC<INavigationListItem> = ({
  link = '',
  text,
  Icon,
  onClick,
  ...restProps
}) => (
  <li
    className='rounded-sm group'
    { ...restProps }
  >
    <Link
      href={ link }
      onClick={ onClick && onClick }
    >
      <button type='button' className='flex items-center w-full p-2 h-[46px] text-bas transition duration-75 rounded-lg group text-zinc-800 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700' aria-controls='dropdown-example' data-collapse-toggle='dropdown-example'>
        { Icon && (
        <Icon
          className='stroke-zinc-600 group-hover:stroke-zinc-800 dark:stroke-slate-600 dark:group-hover:stroke-slate-400 transition-all duration-250'
          width='30px'
          height='30px'
        />
        ) }
        <span className='flex-1 ml-3 text-left whitespace-nowrap'>{ text }</span>
      </button>
    </Link>
  </li>
);

export default NavigationListItem;
