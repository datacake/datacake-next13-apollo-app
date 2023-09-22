'use client';

import React from 'react';
import NavigationList from 'src/components/sidebar/navigationList';

const Sidebar = () => (
  <div className='flex flex-col h-screen p-3 bg-slate-200 shadow w-60 fixed'>
    <div className='flex items-center'>
      <h2 className='text-xl font-bold text-slate-600'>Datacake Example</h2>
    </div>
    <NavigationList />
  </div>
);

export default Sidebar;
