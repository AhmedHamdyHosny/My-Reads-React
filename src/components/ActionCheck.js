import React from 'react';
import checkIcon from '../assets/icons/check.svg';

export default function ActionCheck({ show }) {
  return <div className='check-container'>{show ? <img src={checkIcon} className='bi bi-check check-icon' alt='add' /> : null}</div>;
}
