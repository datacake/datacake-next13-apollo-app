import { FC, ComponentPropsWithoutRef, useId } from 'react';

type ICustomSelect = ComponentPropsWithoutRef<'label'> & {
  setActiveOption: (tag: string) => void;
  options: string[];
  currValue: string;
  text?: string;
}

const CustomSelect: FC<ICustomSelect> = ({
  options,
  text,
  currValue,
  setActiveOption,
  ...restProps
}) => {
  const id = useId();
  return (
    <label
      htmlFor={ id }
      className='block mb-6 text-sm font-medium text-gray-900'
      { ...restProps }
    >
      {text && <span>{ text }</span>}
      <select
        id={ id }
        className='block w-full p-2 mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none shadow-custom'
        onChange={ (e) => setActiveOption(e.target.value) }
        value={ currValue }
      >
        { options.length > 0 && options.map((item) => (
          <option key={ item }>{ item }</option>
        )) }
      </select>
    </label>
  );
};

export default CustomSelect;
