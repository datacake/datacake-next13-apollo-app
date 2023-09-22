'use client';

import {
  ComponentPropsWithoutRef, FC,
} from 'react';
import BoxWithTitleAndValue from 'src/components/boxWithTitleAndValue';

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
  devicesMetrics: TDevicesMetrics;
  title?: string;
};

const Metrics: FC<TMetrics> = ({
  devicesMetrics,
  title,
  ...restProps
}) => (
  <section
    className='text-gray-600'
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

export default Metrics;
