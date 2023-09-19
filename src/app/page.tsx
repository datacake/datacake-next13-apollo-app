/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Metrics from '@/components/Metrix';
import DeviceTable from '@/components/deviceTable';
import getClient from '@/graphql/lib/client';
import getAllDevices from '@/graphql/queries/getAllDevices.gql';
import type { TDevice } from 'types/generalTypes';
import { calculateDevicesMetrics, flattenDevices } from 'utils/generalUtils';

export type TGetAllDevices = {
  allDevices: TDevice[];
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export const revalidate = 1;

const Page = async () => {
  const { data }: { data: TGetAllDevices } = await getClient().query({ query: getAllDevices, fetchPolicy: 'no-cache' });
  const flattenedDevices = flattenDevices(data);
  const devicesMetrics = calculateDevicesMetrics({ deviceArray: flattenedDevices });
  return (
    <main className='p-4 pl-[256px] max-w-7xl overflow-hidden'>
      { devicesMetrics && <Metrics devicesMetrics={ devicesMetrics } /> }
      { flattenedDevices.length > 0 && <DeviceTable deviceArr={ flattenedDevices } /> }
    </main>
  );
};

export default Page;
