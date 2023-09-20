'use client';

import {
  ComponentPropsWithoutRef, FC,
} from 'react';
import MetricItem from './MetricItem';

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
};

const Metrics: FC<TMetrics> = ({
  devicesMetrics,
  ...restProps
}) => (
  <section
    className='text-gray-600'
    { ...restProps }
  >
    <div
      className='container py-5 mx-auto flex flex-wrap gap-3 justify-between'
    >
      { devicesMetrics !== null && Object.values(devicesMetrics).map((item) => (
        <MetricItem
          key={ item.title }
          title={ item.title }
          value={ item.value }
        />
      ))}
    </div>
  </section>
);

export default Metrics;
