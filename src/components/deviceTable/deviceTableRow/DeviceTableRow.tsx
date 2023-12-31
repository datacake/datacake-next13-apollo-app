import { FC, HTMLAttributes } from 'react';
import { TFlattenDevice } from 'types/generalTypes';
import { cn } from 'utils/generalUtils';
import DeviceTableRowTag from 'src/components/deviceTable/deviceTableRow/deviceTableRowTag';
import Link from 'next/link';

type TDeviceTableRow = HTMLAttributes<HTMLTableRowElement> & Omit<TFlattenDevice, 'temperatureChartData' | 'DOOR_OPEN' | 'lastHeard' | 'location'>;

const DeviceTableRow: FC<TDeviceTableRow> = ({
  BATTERY,
  trend,
  INTERNAL_TEMPERATURE,
  WARNING,
  id,
  online,
  serialNumber,
  tags,
  verboseName,
  ...restProps
}) => (
  <tr
    className='odd:bg-opacity-75 even:bg-opacity-75 odd:bg-slate-300 text-zinc-800 even:bg-slate-400 dark:odd:bg-slate-600 dark:text-white dark:even:bg-slate-700'
    { ...restProps }
  >
    <td className='whitespace-nowrap px-6 py-4 font-medium'>
      <div
        className={ cn('w-2 h-2 bg-gray-500 rounded-full', {
          'bg-green-600': online,
        }) }
      />
    </td>
    <td className='whitespace-nowrap font-[400]  px-6 py-4'>
      <Link
        href={ `/home/device/${id}` }
      >
        { verboseName }
      </Link>
    </td>
    <td className='whitespace-nowrap font-[400]  px-6 py-4'>{ serialNumber }</td>
    <td className='whitespace-nowrap font-[400]  px-6 py-4 text-center'>
      { INTERNAL_TEMPERATURE }
      &deg;C
    </td>
    <td className='whitespace-nowrap font-[400]  px-6 py-4'>{ trend }</td>
    <td className={ cn('whitespace-nowrap font-[400]  px-6 py-4', {
      'text-red-600': WARNING === 1,
    }) }
    >
      { WARNING === 0 ? 'no alarm' : 'alarm' }

    </td>
    <td className='whitespace-nowrap font-[400]  px-6 py-4'>{ BATTERY }</td>
    <td className='whitespace-nowrap font-[400]  px-6 py-4 max-w-[450px] flex flex-wrap gap-2'>
      { tags.map((item) => (
        <DeviceTableRowTag key={ item } text={ item } />
      )) }
    </td>
  </tr>
);

export default DeviceTableRow;
