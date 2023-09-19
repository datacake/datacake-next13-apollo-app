import { FC, ComponentPropsWithoutRef } from 'react';

type TDeviceTableRowTag = ComponentPropsWithoutRef<'span'> & {
  text: string;
}

const DeviceTableRowTag: FC<TDeviceTableRowTag> = ({
  text,
  ...restProps
}) => (
  <span
    className='bg-slate-400 rounded-full p-2 text-slate-100 text-[12px]'
    { ...restProps }
  >
    { text }
  </span>
);

export default DeviceTableRowTag;
