import { FC, ComponentPropsWithoutRef } from 'react';

type TDeviceTableRowTag = ComponentPropsWithoutRef<'span'> & {
  text: string;
}

const DeviceTableRowTag: FC<TDeviceTableRowTag> = ({
  text,
  ...restProps
}) => (
  <span
    className='rounded-full p-2 bg-slate-200 text-zinc-800 dark:bg-slate-500 dark:text-white text-[12px]'
    { ...restProps }
  >
    { text }
  </span>
);

export default DeviceTableRowTag;
