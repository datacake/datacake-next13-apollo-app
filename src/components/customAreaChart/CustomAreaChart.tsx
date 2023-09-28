'use client';

import { FC } from 'react';
import {
  XAxis, YAxis, Tooltip, AreaChart, Area,
} from 'recharts';
import { TTemperatureDataPoint } from 'types/generalTypes';
import CustomTooltip from 'src/components/customAreaChart/customTooltip';
import { useTheme } from 'next-themes';

const gradientOffset = (data: TTemperatureDataPoint[]) => {
  const dataMax = Math.max(...data.map((i) => i.value));
  const dataMin = Math.min(...data.map((i) => i.value));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

type TCustomAreaChart = {
  data: TTemperatureDataPoint[];
}

const CustomAreaChart: FC<TCustomAreaChart> = ({
  data,
}) => {
  const off = gradientOffset(data);
  const yTicks = [ -20, -10, 0, 10, 20 ];
  const { theme } = useTheme();

  return (
    <AreaChart
      syncId={ 1234 }
      className='bg-slate-300 dark:bg-slate-700 dark:bg-opacity-75 rounded-lg shadow-custom text-zinc-800 dark:text-white'
      width={ 1000 }
      height={ 300 }
      data={ data }
      margin={ {
        top: 30,
        right: 20,
        left: 0,
        bottom: 20,
      } }
    >
      <XAxis
        dataKey='time'
        stroke={ theme === 'dark' ? '#c2c2c2' : '#27272a' }
      />
      <YAxis
        stroke={ theme === 'dark' ? '#c2c2c2' : '#27272a' }
        domain={ [ 'dataMin', 'dataMax' ] }
        ticks={ yTicks }
      />
      <Tooltip content={ <CustomTooltip /> } />
      <defs>
        <linearGradient id='splitColor' x1='0' y1='0' x2='0' y2='1'>
          <stop offset={ off } stopColor='#f87171' stopOpacity={ 1 } />
          <stop offset={ off } stopColor='#0084c7' stopOpacity={ 1 } />
        </linearGradient>
      </defs>
      <Area
        type='monotone'
        dataKey='value'
        stroke={ theme === 'dark' ? '#3182bd' : '#1e3a8a' }
        fill='url(#splitColor)'
      />
    </AreaChart>
  );
};

export default CustomAreaChart;
