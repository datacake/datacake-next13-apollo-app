'use client';

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useQuery } from '@apollo/client';
import { PacmanLoader } from 'react-spinners';
import type {
  TDevice, TDeviceWithImage, TFlattenDevice, TFlattenDeviceWithImage,
} from 'types/generalTypes';
import {
  flattenDevice, generateTemperatureTimeSeries,
} from 'utils/generalUtils';
import getDeviceById from '@/graphql/queries/getDeviceById.gql';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import CustomLineChart from '@/components/customLineChart';
import DeviceBoxInfo from '@/components/deviceBoxInfo';
import Modal from '@/components/modalWrapper';

export type TGetDevice = {
  device: TDeviceWithImage;
}

const Page = () => {
  const { deviceId } = useParams();
  const { data, loading, error } = useQuery<TGetDevice>(getDeviceById, {
    variables: {
      deviceId,
    },
  });
  const [ flattenedDevice, setFlattenedDevice ] = useState<TFlattenDeviceWithImage | null>(null);

  const chartData = useMemo(() => generateTemperatureTimeSeries(flattenedDevice?.temperatureChartData || []), [ flattenedDevice ]);
  useEffect(() => {
    if (data) {
      setFlattenedDevice(flattenDevice(data));
    }
  }, [ data ]);

  if (loading) {
    return (
      <Modal classnames='flex items-center justify-center'>
        <PacmanLoader color='#2bb89c' />
      </Modal>
    );
  }

  return (
    <main className='p-4 pl-[256px] min-h-[100vh] flex items-center flex-col overflow-hidden'>
      <div className='flex flex-col items-start gap-[20px]'>
        { flattenedDevice && <DeviceBoxInfo device={ flattenedDevice } /> }
        <CustomLineChart data={ chartData } />
      </div>
    </main>
  );
};

export default Page;
