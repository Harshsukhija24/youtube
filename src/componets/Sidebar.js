import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen=useSelector(store=> store.app.isMenuOpen);

  if(!isMenuOpen) return null;
  return (
    <div className=' p-5 shadow-lg w-48'>
    <ul>
    <li>home</li>
    <li>Shorts</li>
    <li>video</li>
    <li>saved</li>
    </ul>
      <h1 className='font-bold pt-3'>Watch later</h1>
      <ul>
      <li>home</li>
      <li>Shorts</li>
      <li>video</li>
      <li>saved</li>
      </ul>
      <h1 className=' font-bold py-3' >Subscriptions</h1>
      <ul className="" >
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movie</li>
      </ul>
    </div>
  )
}

export default Sidebar;
