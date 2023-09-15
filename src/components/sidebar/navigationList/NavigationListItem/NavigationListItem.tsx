import Link from 'next/link';
import { FC, HTMLAttributes, SVGProps } from 'react';

interface INavigationListItem extends HTMLAttributes<HTMLLIElement> {
  link?: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

const NavigationListItem: FC<INavigationListItem> = ({
  link = '',
  text,
  Icon,
  ...restProps
}) => (
  <li
    className='rounded-sm group'
    // eslint-disable-next-line react/jsx-props-no-spreading
    { ...restProps }
  >
    <Link
      href={ link }
      className='flex group-hover:stroke-slate-900 text-slate-600 transition-all duration-250 items-center p-2 space-x-3 rounded-md border-solid border-transparent border hover:border-b-slate-900 hover:border hover:text-slate-900'
    >
      <Icon
        className='stroke-slate-600 group-hover:stroke-slate-900 transition-all duration-250'
        width='30px'
        height='30px'
      />
      <span className='text-lg font-medium'>{ text }</span>
    </Link>
  </li>
);

export default NavigationListItem;
