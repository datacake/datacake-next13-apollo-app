'use client';

import React from 'react';
import NavigationList from 'src/components/sidebar/navigationList';

const Sidebar = () => (
  <div className='flex flex-col h-screen p-3 bg-slate-700 bg-opacity-75 shadow w-60 fixed top-12'>
    <NavigationList />
  </div>
);

export default Sidebar;
