'use client';

import DeviceTable from '@/components/deviceTable';
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import getClient from '@/graphql/lib/client';
import getAllDevices from '@/graphql/queries/getAllDevices.gql';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import type { DeviceMeasurementFields, TDevice, TFlattenDevice } from 'types/generalTypes';
import { flattenDevices } from 'utils/generalUtils';

export type TGetAllDevices = {
  allDevices: TDevice[];
}

export const revalidate = 1;

const Page = () => {
  // const { data }: { data: TGetAllDevices } = await getClient().query({ query: getAllDevices });
  const { data }: { data: TGetAllDevices } = useSuspenseQuery(getAllDevices);
  const flattenedDevices = flattenDevices(data);
  return (
    <main className='p-4 pl-[256px]'>
      { flattenedDevices.length > 0 && <DeviceTable deviceArr={ flattenedDevices } /> }
    </main>
  );
};

export default Page;
