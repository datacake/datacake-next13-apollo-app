'use client';

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Metrics from '@/components/metrix';
import DeviceTable from '@/components/deviceTable';
import getAllDevices from '@/graphql/queries/getAllDevices.gql';
import { useQuery } from '@apollo/client';
import { PacmanLoader } from 'react-spinners';
import type { TDevice, TFlattenDevice } from 'types/generalTypes';
import { calculateAveragesDevicesKpis, calculateDevicesMetrics, flattenDevices } from 'utils/generalUtils';
import Kpis from '@/components/kpis';
import Modal from '@/components/modalWrapper/ModalWrapper';
import { useEffect, useState } from 'react';

export type TGetAllDevices = {
  allDevices: TDevice[];
}

export const revalidate = 1;

const Page = () => {
  const { data, loading, error } = useQuery<TGetAllDevices>(getAllDevices);
  const [ flattenedDevices, setFlattenedDevices ] = useState<TFlattenDevice[]>([]);

  useEffect(() => {
    if (data?.allDevices) setFlattenedDevices(flattenDevices(data));
  }, [ data ]);

  if (loading) {
    return (
      <Modal classnames='flex items-center justify-center'>
        <PacmanLoader color='#2bb89c' />
      </Modal>
    );
  }

  return (
    <div className=' p-4 min-h-[100vh] overflow-hidden pb-[50px] flex justify-center'>
      <div className='flex flex-col items-start'>
        <Kpis title='Devices base kpis' />
        <Metrics title='Main metrics' />
        <DeviceTable deviceArr={ flattenedDevices } />
      </div>
    </div>
  );
};

export default Page;
