import { FC, ComponentPropsWithoutRef } from 'react';
import BoxWithTitleAndValue from '../boxWithTitleAndValue';

type TDevicesKpisItem = {
  title: string;
  value: string | number;
}

type TDevicesKpis ={
  averageTemperature: TDevicesKpisItem;
  averageBatteryChargeLevel: TDevicesKpisItem;
}

type TKpis = ComponentPropsWithoutRef<'section'> & {
  title?: string;
  deviceKpis: TDevicesKpis;
}

const Kpis: FC<TKpis> = ({
  deviceKpis,
  title,
  ...restProps
}) => (
  <section
    className='text-gray-600'
    { ...restProps }
  >
    { title ? <h2 className='text-lg font-medium'>{ title }</h2> : null }
    <div
      className='container py-5 mx-auto flex flex-wrap gap-3 justify-between'
    >
      { deviceKpis !== null && Object.values(deviceKpis).map((item) => (
        <BoxWithTitleAndValue
          key={ item.title }
          title={ item.title }
          value={ item.value }
        />
      ))}
    </div>
  </section>
);

export default Kpis;
