'use client';

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Metrics from '@/components/metrix';
import DeviceTable from '@/components/deviceTable';
import getAllDevices from '@/graphql/queries/getAllDevices.gql';
import { useQuery } from '@apollo/client';
import { PacmanLoader } from 'react-spinners';
import type { TDevice } from 'types/generalTypes';
import { calculateAveragesDevicesKpis, calculateDevicesMetrics, flattenDevices } from 'utils/generalUtils';
import Kpis from '@/components/kpis';
import Modal from '@/components/modalWrapper/ModalWrapper';

export type TGetAllDevices = {
  allDevices: TDevice[];
}

export const revalidate = 1;

const Page = () => {
  const { data, loading, error } = useQuery<TGetAllDevices>(getAllDevices);
  const flattenedDevices = flattenDevices(data || { allDevices: [] });
  const devicesMetrics = calculateDevicesMetrics({ deviceArray: flattenedDevices });
  const averageKpis = calculateAveragesDevicesKpis({ deviceArray: flattenedDevices });
  return (
    <main className='p-4 pl-[256px] min-h-[100vh] flex items-center flex-col overflow-hidden'>
      { loading ? (
        <Modal classnames='flex items-center justify-center'>
          <PacmanLoader
            color='#36d7b7'
            size={ 50 }
            aria-label='Loading Spinner'
          />
        </Modal>
      ) : (
        <div className='flex flex-col items-start'>
          <Kpis deviceKpis={ averageKpis } title='Devices base kpis' />
          <Metrics devicesMetrics={ devicesMetrics } title='Main metrics' />
          <DeviceTable deviceArr={ flattenedDevices } />
        </div>
      )}
    </main>
  );
};

export default Page;
