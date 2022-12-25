import React from 'react';
import checkIcon from '../assets/icons/check.svg';

export default function ActionCheck({ show }) {
  return (
    <div className='check-container'>
      {show ? (
        <img src={checkIcon} className='bi bi-check check-icon' alt='add' />
      ) : // <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-check' viewBox='50 50 512 512'>
      //   <path d='M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
      // </svg>
      null}
    </div>
  );
}