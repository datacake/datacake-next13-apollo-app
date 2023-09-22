'use client';

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useQuery } from '@apollo/client';
import { PacmanLoader } from 'react-spinners';
import type { TDevice, TFlattenDevice } from 'types/generalTypes';
import {
  flattenDevice, generateTemperatureTimeSeries,
} from 'utils/generalUtils';
import getDeviceById from '@/graphql/queries/getDeviceById.gql';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import CustomLineChart from '@/components/customLineChart';

export type TGetDevice = {
  device: TDevice;
}

const Page = () => {
  const { deviceId } = useParams();
  const { data, loading, error } = useQuery<TGetDevice>(getDeviceById, {
    variables: {
      deviceId,
    },
  });
  const [ flattenedDevice, setFlattenedDevice ] = useState<TFlattenDevice | null>(null);

  const chartData = useMemo(() => generateTemperatureTimeSeries(flattenedDevice?.temperatureChartData || []), [ flattenedDevice ]);
  useEffect(() => {
    if (data) {
      setFlattenedDevice(flattenDevice(data));
    }
  }, [ data ]);

  return (
    <main className='p-4 pl-[256px] min-h-[100vh] flex items-center flex-col overflow-hidden'>
      <CustomLineChart data={ chartData } />
    </main>
  );
};

export default Page;
