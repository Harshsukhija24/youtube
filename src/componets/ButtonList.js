import React from 'react';
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Live" />
      <Button name="Cooking" />
      <Button name="WWE" />
      <Button name="Cricket" />
      <Button name="music" />
      <Button name="movie" />
      <Button name="study" />

    </div>
  );
}

export default ButtonList;
