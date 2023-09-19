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
import DeviceTableRow from './deviceTableRow';

interface IDeviceTable extends HTMLAttributes<HTMLDivElement> {
  deviceArr: TFlattenDevice[];
}

const DeviceTable: FC<IDeviceTable> = ({ deviceArr }) => {
  const setDevices = useDeviceStore(selectSetDevices);
  const filteredDevices = useDeviceStore(selectFilteredDeviceArr);
  const setFilterByTagsOptions = useDeviceStore(selectSetFilterByTagsOptions);
  const setFilterByTagsCurrent = useDeviceStore(selectSetFilterByTagsCurrent);
  const filterByTagsCurrent = useDeviceStore(selectFilterByTagsCurrent);
  const filterByTagsOptions = useDeviceStore(selectFilterByTagsOptions);

  useEffect(() => {
    setDevices(deviceArr);
  }, [ deviceArr, setDevices ]);

  useEffect(() => {
    setFilterByTagsOptions(deviceArr);
  }, [ deviceArr, setFilterByTagsOptions ]);

  if (filteredDevices.length < 1) return null;

  return (
    <>
      <div className='w-[200px]'>
        <CustomSelect
          currValue={ filterByTagsCurrent }
          setActiveOption={ setFilterByTagsCurrent }
          text='Filter by tags'
          options={ filterByTagsOptions }
        />
      </div>
      <div className='max-h-[500px] overflow-y-auto scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 custom-scrollbar'>
        <table className='min-w-full text-left text-sm font-light rounded-lg'>
          <thead
            className='border-b bg-gray-400 border-gray-400 text-gray-200 text-center sticky top-0'
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
            { filteredDevices.map((device) => (
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
            )) }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DeviceTable;
