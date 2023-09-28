import { FC, ComponentPropsWithoutRef, SVGProps } from 'react';

type TDeviceBoxInfoItem = ComponentPropsWithoutRef<'div'> & {
  title?: string;
  value: number | string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
}

const DeviceBoxInfoItem: FC<TDeviceBoxInfoItem> = ({
  title,
  value,
  Icon,
  ...restProps
}) => (
  <div
    className='flex flex-col bg-slate-200 dark:bg-slate-500 min-w-[100px] max-h-[60px] min-h-[60px] w-fit h-fit rounded-lg justify-center items-center p-2 transition-colors duration-200 hover:bg-slate-400 dark:hover:bg-slate-600'
    { ...restProps }
  >
    { Icon && (
    <Icon
      className=' stroke-zinc-800 dark:stroke-white transition-all duration-250'
      width='20px'
      height='20px'
    />
    )}
    { title && <span className='font-medium text-[9px]'>{ title }</span>}
    <span className='font-medium text-[12px]'>{ value }</span>
  </div>
);

export default DeviceBoxInfoItem;
