import Image from 'next/image';
import { FC, ComponentPropsWithoutRef } from 'react';
import { TFlattenDeviceWithImage } from 'types/generalTypes';
import { formatDate } from 'utils/generalUtils';
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
    DOOR_OPEN,
    INTERNAL_TEMPERATURE,
    WARNING,
    lastHeard,
    location,
    online,
    serialNumber,
    trend,
    verboseName,
  } = device;
  return (
    <div
      className='p-4 bg-white rounded-lg shadow-custom flex gap-2 max-w-[1000px]'
      { ...restProps }
    >
      <div className='min-w-[280px] min-h-[200px] w-fit h-fit'>
        <Image
          alt='device photo'
          src={ device.image || '/images/image-placeholder.jpg' }
          width={ 280 }
          height={ 200 }
        />
      </div>
      <div className='flex flex-wrap gap-3 items-stretch'>
        <DeviceBoxInfoItem
          title='Battery'
          value={ BATTERY }
        />
        <DeviceBoxInfoItem
          title='Door status'
          value={ DOOR_OPEN ? 'Open' : 'Close' }
        />
        <DeviceBoxInfoItem
          title='Warnings'
          value={ WARNING ? 'yes' : 'no' }
        />
        <DeviceBoxInfoItem
          title='Temperature'
          value={ `${INTERNAL_TEMPERATURE}°C` }
        />
        <DeviceBoxInfoItem
          title='Last heard'
          value={ formatDate(lastHeard) }
        />
        <DeviceBoxInfoItem
          title='Location'
          // eslint-disable-next-line no-extra-boolean-cast
          value={ (location.length < 1 || !!location) ? 'unknown' : location }
        />
        <DeviceBoxInfoItem
          title='Online'
          value={ online ? 'yes' : 'offline' }
        />
        <DeviceBoxInfoItem
          title='Serial number'
          value={ serialNumber }
        />

        <DeviceBoxInfoItem
          title='Name'
          value={ verboseName }
        />
        <DeviceBoxInfoItem
          title='Temperature trend'
          value={ trend }
        />
      </div>
    </div>
  );
};

export default DeviceBoxInfo;
