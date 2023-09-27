const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='p-4 rounded-lg bg-slate-600'>
        <p className='label'>{`Temperature: ${payload[0].value}°C`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
