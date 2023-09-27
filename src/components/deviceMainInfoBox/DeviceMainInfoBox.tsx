import { FC, ComponentPropsWithoutRef } from 'react';
import { TFlattenDeviceWithImage } from 'types/generalTypes';
import { twMerge } from 'tailwind-merge';
import BoxWithTitleAndValue from '../boxWithTitleAndValue';

type TDeviceMainInfoBox = ComponentPropsWithoutRef<'div'> & {
  device: TFlattenDeviceWithImage;
  classname?: string;
}

const DeviceMainInfoBox: FC<TDeviceMainInfoBox> = ({
  device,
  classname,
  ...restProps
}) => {
  const {
    trend,
    DOOR_OPEN,
    INTERNAL_TEMPERATURE,
  } = device;
  return (

    <div
      className={ twMerge('flex flex-wrap gap-2', classname) }
      { ...restProps }
    >
      <BoxWithTitleAndValue
        title='Door status'
        value={ DOOR_OPEN ? 'Open' : 'Close' }
      />
      <BoxWithTitleAndValue
        title='Temperature'
        value={ `${INTERNAL_TEMPERATURE}°C` }
      />
      <BoxWithTitleAndValue
        title='Temperature trend'
        value={ trend }
      />
    </div>
  );
};

export default DeviceMainInfoBox;
