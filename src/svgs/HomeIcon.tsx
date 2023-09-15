import { FC, SVGProps } from 'react';

interface IHomeIcon extends SVGProps<SVGSVGElement> {

}

const HomeIcon: FC<IHomeIcon> = ({ ...restProps }) => (
  <svg
    width='800px'
    height='800px'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-labelledby='homeAlt2IconTitle'
    stroke='#000000'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    fill='none'
    color='#000000'
    { ...restProps }
  >
    <path d='M2 12L5 9.3M22 12L19 9.3M19 9.3L12 3L5 9.3M19 9.3V21H5V9.3' />
  </svg>
);

export default HomeIcon;
