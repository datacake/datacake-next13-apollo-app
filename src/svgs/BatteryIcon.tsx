import { FC, SVGProps } from 'react';

interface IBatteryIcon extends SVGProps<SVGSVGElement> {

}

const BatteryIcon: FC<IBatteryIcon> = ({ ...restProps }) => (
  <svg
    width='800px'
    height='800px'
    stroke='#323232'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    { ...restProps }
  >
    <path
      d='M21 11V13'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 8L11.8852 8.15313L9.12188 11.8375L9.07313 11.9025C9.043 11.9427 9.07166 12 9.12188 12V12H12.8107V12C12.8887 12 12.9332 12.0891 12.8864 12.1515L12.8107 12.2525L10.157 15.7907L10 16'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14 16H16V16C17.1046 16 18 15.1046 18 14V10C18 8.89543 17.1046 8 16 8V8H15'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 16H5V16C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8V8H8'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default BatteryIcon;
