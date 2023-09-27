'use client';

import {
  FC, HTMLAttributes, useEffect,
} from 'react';
import { TFlattenDevice } from 'types/generalTypes';
import useDeviceStore from '@/stors/device/deviceStore';
import {
  selectFilterByTagsCurrent,
  selectFilterByTagsOptions,
  selectFilteredDeviceArr,
  selectSetDevices,
  selectSetFilterByTagsCurrent,
  selectSetFilterByTagsOptions,
} from '@/stors/device/deviceSelectors';
import CustomSelect from 'src/components/customSelect';
import { useRouter, useSearchParams } from 'next/navigation';
import DeviceTableRow from './deviceTableRow';

interface IDeviceTable extends HTMLAttributes<HTMLDivElement> {
  deviceArr: TFlattenDevice[];
}

const DeviceTable: FC<IDeviceTable> = ({ deviceArr }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTag = searchParams.get('tag');
  const setDevices = useDeviceStore(selectSetDevices);
  const filteredDevices = useDeviceStore(selectFilteredDeviceArr);
  const setFilterByTagsOptions = useDeviceStore(selectSetFilterByTagsOptions);
  const setFilterByTagsCurrent = useDeviceStore(selectSetFilterByTagsCurrent);

  useEffect(() => {
    setDevices(deviceArr);
  }, [ deviceArr, setDevices ]);

  useEffect(() => {
    setFilterByTagsOptions(deviceArr);
  }, [ deviceArr, setFilterByTagsOptions ]);

  useEffect(() => {
    if (activeTag === null) {
      router.push('/home/?tag=All');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeTag !== null) setFilterByTagsCurrent(activeTag);
  }, [ activeTag, setFilterByTagsCurrent ]);

  if (filteredDevices.length < 1) return null;

  return (
    <div className='flex items-center flex-col'>
      {/* <div className='w-[200px] self-start'>
        <CustomSelect
          currValue={ filterByTagsCurrent }
          setActiveOption={ setFilterByTagsCurrent }
          text='Filter by tags'
          options={ filterByTagsOptions }
        />
      </div> */}

      <h2 className='self-start text-white text-lg font-medium mb-[12px]'>Your devices</h2>
      <div className='max-h-[500px] overflow-hidden overflow-y-auto scrollbar rounded-lg scrollbar-thumb-gray-400 scrollbar-track-gray-200 custom-scrollbar'>
        <table className='min-w-fit max-w-7xl text-left text-sm font-light'>
          <thead
            className='bg-slate-700 bg-opacity-75 text-white text-center sticky top-0'
            style={ { zIndex: 2 } }
          >
            <tr>
              <th scope='col' className='px-6 py-4 font-medium'>Status</th>
              <th scope='col' className='px-6 py-4 font-medium'>Name</th>
              <th scope='col' className='px-6 py-4 font-medium'>Serial</th>
              <th scope='col' className='px-6 py-4 font-medium'>Temperature</th>
              <th scope='col' className='px-6 py-4 font-medium'>Trend</th>
              <th scope='col' className='px-6 py-4 font-medium'>Alarm</th>
              <th scope='col' className='px-6 py-4 font-medium'>Battery</th>
              <th scope='col' className='px-6 py-4 font-medium'>tags</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((device) => (
              <DeviceTableRow
                trend={ device.trend }
                key={ device.id }
                BATTERY={ device.BATTERY }
                INTERNAL_TEMPERATURE={ device.INTERNAL_TEMPERATURE }
                WARNING={ device.WARNING }
                id={ device.id }
                online={ device.online }
                serialNumber={ device.serialNumber }
                tags={ device.tags }
                verboseName={ device.verboseName }
              />
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default DeviceTable;
