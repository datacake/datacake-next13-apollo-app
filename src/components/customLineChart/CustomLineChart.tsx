'use client';

import { FC } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { TTemperatureDataPoint } from 'types/generalTypes';

type TCustomLineChart = {
  data: TTemperatureDataPoint[];
}

const CustomLineChart: FC<TCustomLineChart> = ({
  data,
}) => {
  console.log(data);
  return (
    <LineChart
      className='bg-white'
      width={ 1000 }
      height={ 300 }
      data={ data }
      margin={ {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      } }
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <YAxis />
      <Tooltip />
      <Line type='monotone' dataKey='value' stroke='#82ca9d' />
    </LineChart>
  );
};

export default CustomLineChart;
