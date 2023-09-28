import Image from 'next/image';
import { FC, ComponentPropsWithoutRef } from 'react';
import { TFlattenDeviceWithImage } from 'types/generalTypes';
import { formatDate } from 'utils/generalUtils';
import BatteryIcon from '@/svgs/BatteryIcon';
import DeviceBoxInfoItem from './deviceBoxInfoItem';

type TDeviceBoxInfo = ComponentPropsWithoutRef<'div'> & {
  device: TFlattenDeviceWithImage;
}

const DeviceBoxInfo: FC<TDeviceBoxInfo> = ({
  device,
  ...restProps
}) => {
  const {
    BATTERY,
    WARNING,
    lastHeard,
    location,
    online,
    serialNumber,
    verboseName,
  } = device;
  return (
    <div
      className='p-4 bg-slate-300 dark:bg-slate-700 dark:bg-opacity-75 rounded-lg shadow-custom flex gap-2 max-w-[1000px]'
      { ...restProps }
    >
      <div className='min-w-[100px] min-h-[67px]'>
        <Image
          alt='device photo'
          src={ device.image || '/images/image-placeholder.jpg' }
          width={ 100 }
          height={ 67 }
        />
      </div>
      <div className='flex flex-col justify-around gap-2  text-zinc-800  dark:text-white'>
        <div>
          <h2 className='font-medium text-lg'>{verboseName}</h2>
        </div>
        <div className='flex flex-wrap gap-2'>
          <DeviceBoxInfoItem
            title='Location'
          // eslint-disable-next-line no-extra-boolean-cast
            value={ (location.length < 1 || !!location) ? 'unknown' : location }
          />
          <DeviceBoxInfoItem
            title='Serial number'
            value={ serialNumber }
          />
          <DeviceBoxInfoItem
            Icon={ BatteryIcon }
            value={ BATTERY }
          />
          <DeviceBoxInfoItem
            title='Last heard'
            value={ formatDate(lastHeard) }
          />
          <DeviceBoxInfoItem
            title='Online'
            value={ online ? 'yes' : 'offline' }
          />
          <DeviceBoxInfoItem
            title='Warnings'
            value={ WARNING ? 'yes' : 'no' }
          />
        </div>
      </div>
    </div>
  );
};

export default DeviceBoxInfo;
