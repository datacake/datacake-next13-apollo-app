'use client';

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Metrics from '@/components/Metrix';
import DeviceTable from '@/components/deviceTable';
import getAllDevices from '@/graphql/queries/getAllDevices.gql';
import { useQuery } from '@apollo/client';
import { PacmanLoader } from 'react-spinners';
import type { TDevice } from 'types/generalTypes';
import { calculateDevicesMetrics, flattenDevices } from 'utils/generalUtils';

export type TGetAllDevices = {
  allDevices: TDevice[];
}

export const revalidate = 1;

const Page = () => {
  const { data, loading, error } = useQuery<TGetAllDevices>(getAllDevices);
  const flattenedDevices = flattenDevices(data || { allDevices: [] });
  const devicesMetrics = calculateDevicesMetrics({ deviceArray: flattenedDevices });
  return (
    <main className='p-4 pl-[256px] min-h-[100vh] max-w-7xl overflow-hidden'>
      { loading ? (
        <div className='w-full min-h-[100vh] flex items-center justify-center absolute top-0 left-0'>
          <PacmanLoader
            color='#36d7b7'
            size={ 50 }
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      ) : (
        <>
          <Metrics devicesMetrics={ devicesMetrics } />
          <DeviceTable deviceArr={ flattenedDevices } />
        </>
      )}
    </main>
  );
};

export default Page;
