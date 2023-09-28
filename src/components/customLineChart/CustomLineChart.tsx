'use client';

import { useTheme } from 'next-themes';
import { FC } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';
import { TTemperatureDataPoint } from 'types/generalTypes';

type TCustomLineChart = {
  data: TTemperatureDataPoint[];
}

const CustomLineChart: FC<TCustomLineChart> = ({
  data,
}) => {
  const { theme } = useTheme();
  return (
    <LineChart
      syncId={ 123 }
      className=' bg-slate-300 dark:bg-slate-700 dark:bg-opacity-75 rounded-lg shadow-custom text-zinc-800 dark:text-white'
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
      <Legend
        verticalAlign='top'
        height={ 36 }
        content={ <h3 className='text-zinc-800 dark:text-white'>Last 24 hours temperature chart</h3> }
      />
      <XAxis
        dataKey='time'
        stroke={ theme === 'dark' ? '#c2c2c2' : '#27272a' }
      />
      <YAxis
        stroke={ theme === 'dark' ? '#c2c2c2' : '#27272a' }
      />
      <Tooltip />
      <Line
        type='monotone'
        dataKey='value'
        stroke={ theme === 'dark' ? '#3182bd' : '#1e3a8a' }
      />
    </LineChart>
  );
};

export default CustomLineChart;
