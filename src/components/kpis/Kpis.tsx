import {
  FC, ComponentPropsWithoutRef, useState, useEffect,
} from 'react';
import useDeviceStore from '@/stors/device/deviceStore';
import { selectFilteredDeviceArr } from '@/stors/device/deviceSelectors';
import { calculateAveragesDevicesKpis } from 'utils/generalUtils';
import BoxWithTitleAndValue from '../boxWithTitleAndValue';

type TDevicesKpisItem = {
  title: string;
  value: string | number;
}

type TDevicesKpis ={
  averageTemperature: TDevicesKpisItem;
  averageBatteryChargeLevel: TDevicesKpisItem;
}

type TKpis = ComponentPropsWithoutRef<'section'> & {
  title?: string;
}

const Kpis: FC<TKpis> = ({
  title,
  ...restProps
}) => {
  const filteredDevices = useDeviceStore(selectFilteredDeviceArr);
  const [ deviceKpis, setDeviceKpis ] = useState<TDevicesKpis | null>(null);

  useEffect(() => {
    if (filteredDevices.length > 0) {
      setDeviceKpis(calculateAveragesDevicesKpis({ deviceArray: filteredDevices }));
    }
  }, [ filteredDevices ]);

  return (
    <section
      className='text-white'
      { ...restProps }
    >
      { title ? <h2 className='text-lg font-medium'>{ title }</h2> : null }
      <div
        className='container py-5 mx-auto flex flex-wrap gap-3 justify-between'
      >
        { deviceKpis !== null && Object.values(deviceKpis).map((item) => (
          <BoxWithTitleAndValue
            key={ item.title }
            title={ item.title }
            value={ item.value }
          />
        ))}
      </div>
    </section>
  );
};

export default Kpis;
