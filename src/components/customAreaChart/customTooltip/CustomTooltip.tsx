const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='p-4 rounded-lg bg-slate-200 text-zinc-800 dark:bg-slate-600 dark:text-white'>
        <p className='label'>{`Temperature: ${payload[0].value}°C`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
