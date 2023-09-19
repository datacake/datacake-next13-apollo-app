import { FC, ComponentPropsWithoutRef } from 'react';

type TMetricItem = ComponentPropsWithoutRef<'div'> & {
  title: string;
  value: number | string;
}

const MetricItem: FC<TMetricItem> = ({
  title,
  value,
  ...restProps
}) => (

  <div
    className='h-[180px] p-4 bg-gray-100 bg-opacity-75 flex flex-col items-center justify-center w-1/6 min-w-[180px] rounded-lg overflow-hidden text-center shadow-custom'
    { ...restProps }
  >
    <h2 className='sm:text-base text-sm font-bold text-gray-500 mb-1'>{ title }</h2>
    <span className='sm:text-lg text-xs font-bold text-gray-600'>{ value }</span>
  </div>
);

export default MetricItem;
