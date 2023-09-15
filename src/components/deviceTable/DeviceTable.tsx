import { FC, HTMLAttributes } from 'react';
import { TFlattenDevice } from 'types/generalTypes';
import DeviceTableRow from './deviceTableRow';

interface IDeviceTable extends HTMLAttributes<HTMLDivElement> {
  deviceArr: TFlattenDevice[];
}

const DeviceTable: FC<IDeviceTable> = ({ deviceArr }) => (
  <table className='min-w-full text-left text-sm font-light rounded-lg overflow-hidden'>
    <thead
      className='border-b bg-gray-400 border-gray-400 text-gray-200'
    >
      <tr>
        <th scope='col' className='px-6 py-4 font-medium'>Status</th>
        <th scope='col' className='px-6 py-4 font-medium'>Name</th>
        <th scope='col' className='px-6 py-4 font-medium'>Serial</th>
        <th scope='col' className='px-6 py-4 font-medium'>Temperature</th>
        <th scope='col' className='px-6 py-4 font-medium'>Trend</th>
        <th scope='col' className='px-6 py-4 font-medium'>Alarm</th>
        <th scope='col' className='px-6 py-4 font-medium'>Humidity</th>
        <th scope='col' className='px-6 py-4 font-medium'>Battery</th>
        <th scope='col' className='px-6 py-4 font-medium'>tags</th>
      </tr>
    </thead>
    <tbody>
      { deviceArr.map((device) => (
        <DeviceTableRow
          key={ device.id }
          BATTERY={ device.BATTERY }
          DOOR_OPEN={ device.DOOR_OPEN }
          INTERNAL_TEMPERATURE={ device.INTERNAL_TEMPERATURE }
          WARNING={ device.WARNING }
          id={ device.id }
          lastHeard={ device.lastHeard }
          location={ device.location }
          online={ device.online }
          serialNumber={ device.serialNumber }
          tags={ device.tags }
          verboseName={ device.verboseName }
        />
      )) }
    </tbody>
  </table>
);

export default DeviceTable;
