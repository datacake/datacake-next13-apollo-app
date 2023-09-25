import { FC, ComponentPropsWithoutRef } from 'react';

type TDeviceBoxInfoItem = ComponentPropsWithoutRef<'div'> & {
  title: string;
  value: number | string;
}

const DeviceBoxInfoItem: FC<TDeviceBoxInfoItem> = ({
  title,
  value,
  ...restProps
}) => (
  <div
    className='flex flex-col shadow-custom min-w-[70px] min-h-[70px] w-fit h-fit rounded-lg justify-center items-center p-5'
    { ...restProps }
  >
    <span className='font-medium text-center'>{ title }</span>
    <span className='font-medium'>{ value }</span>
  </div>
);

export default DeviceBoxInfoItem;
