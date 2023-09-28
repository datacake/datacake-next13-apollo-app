'use client';

import { selectFilteredDeviceArr } from '@/stors/device/deviceSelectors';
import useDeviceStore from '@/stors/device/deviceStore';
import {
  ComponentPropsWithoutRef, FC, useEffect, useState,
} from 'react';
import BoxWithTitleAndValue from 'src/components/boxWithTitleAndValue';
import { calculateDevicesMetrics } from 'utils/generalUtils';

type TDevicesMetricsItem = {
  title: string;
  value: string | number;
}

type TDevicesMetrics = {
    numOfDevicesOnline: TDevicesMetricsItem,
    numOfDevicesOffline: TDevicesMetricsItem,
    numOfDevicesAboveThreshold: TDevicesMetricsItem,
    numOfDevicesWithingRange: TDevicesMetricsItem,
    numOfDevicesWithLowBattery: TDevicesMetricsItem,
}

type TMetrics = ComponentPropsWithoutRef<'section'> & {
  title?: string;
};

const Metrics: FC<TMetrics> = ({
  title,
  ...restProps
}) => {
  const filteredDevices = useDeviceStore(selectFilteredDeviceArr);
  const [ devicesMetrics, setDevicesMetrics ] = useState<TDevicesMetrics | null>(null);

  useEffect(() => {
    if (filteredDevices.length > 0) {
      setDevicesMetrics(calculateDevicesMetrics({ deviceArray: filteredDevices }));
    }
  }, [ filteredDevices ]);

  return (
    <section
      className='text-zinc-800 dark:text-white'
      { ...restProps }
    >
      { title ? <h2 className='text-lg font-medium'>{ title }</h2> : null }
      <div
        className='container py-5 mx-auto flex flex-wrap gap-3 justify-between'
      >
        { devicesMetrics !== null && Object.values(devicesMetrics).map((item) => (
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

export default Metrics;
