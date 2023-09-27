import { FC, ComponentPropsWithoutRef } from 'react';

type TBoxWithTitleAndValue = ComponentPropsWithoutRef<'div'> & {
  title: string;
  value: number | string;
}

const BoxWithTitleAndValue: FC<TBoxWithTitleAndValue> = ({
  title,
  value,
  ...restProps
}) => (

  <div
    className='h-[180px] p-4 bg-slate-700 bg-opacity-75 flex flex-col items-center justify-center w-[230px] rounded-lg overflow-hidden text-center shadow-custom'
    { ...restProps }
  >
    <h2 className='lg:text-xs font-medium text-white mb-1'>{ title }</h2>
    <span className='lg:text-3xl text-xs font-bold text-white'>{ value }</span>
  </div>
);

export default BoxWithTitleAndValue;
