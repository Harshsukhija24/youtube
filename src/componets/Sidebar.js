import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-72 bg-white'>
      <ul className='mb-4'>
        <li className='py-2 px-3 text-sm font-semibold text-gray-800'>Home</li>
        <li className='py-2 px-3 text-sm font-semibold text-gray-800'>Trending</li>
        <li className='py-2 px-3 text-sm font-semibold text-gray-800'>Subscriptions</li>
      </ul>
      <h1 className='font-bold text-lg text-gray-800 pb-3'>Library</h1>
      <ul className='mb-4'>
        <li className='py-2 px-3 text-sm text-gray-700'>History</li>
        <li className='py-2 px-3 text-sm text-gray-700'>Watch later</li>
        <li className='py-2 px-3 text-sm text-gray-700'>Liked videos</li>
      </ul>
      <h1 className='font-bold text-lg text-gray-800 pb-3'>Subscriptions</h1>
      <ul>
        <li className='py-2 px-3 text-sm text-gray-700'>Music</li>
        <li className='py-2 px-3 text-sm text-gray-700'>Sports</li>
        <li className='py-2 px-3 text-sm text-gray-700'>Gaming</li>
        <li className='py-2 px-3 text-sm text-gray-700'>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
