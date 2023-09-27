import { FC, ComponentPropsWithoutRef } from 'react';

type TDeviceTableRowTag = ComponentPropsWithoutRef<'span'> & {
  text: string;
}

const DeviceTableRowTag: FC<TDeviceTableRowTag> = ({
  text,
  ...restProps
}) => (
  <span
    className='bg-slate-500 rounded-full p-2 text-white text-[12px]'
    { ...restProps }
  >
    { text }
  </span>
);

export default DeviceTableRowTag;
