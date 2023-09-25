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
    className='bg-white rounded-lg shadow-custom'
    width={ 1000 }
    height={ 300 }
    data={ data }
    margin={ {
      top: 30,
      right: 20,
      left: -20,
      bottom: 20,
    } }
  >
    <CartesianGrid strokeDasharray='1 0' className='stroke-gray-600' vertical={ false } />
    <XAxis dataKey='time' className='stroke-gray-600' />
    <YAxis />
    <Tooltip />
    <Line type='monotone' dataKey='value' className='stroke-gray-600' />
  </LineChart>
);

export default CustomLineChart;
