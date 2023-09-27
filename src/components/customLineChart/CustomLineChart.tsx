'use client';

import { FC } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { TTemperatureDataPoint } from 'types/generalTypes';

type TCustomLineChart = {
  data: TTemperatureDataPoint[];
}

const CustomLineChart: FC<TCustomLineChart> = ({
  data,
}) => (
  <LineChart
    syncId={ 123 }
    className='bg-slate-700 bg-opacity-75 rounded-lg shadow-custom text-white'
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
      stroke='#c2c2c2'
    />
    <YAxis
      stroke='#c2c2c2'
    />
    <Tooltip />
    <Line type='monotone' dataKey='value' className='stroke-gray-600' />
  </LineChart>
);

export default CustomLineChart;
