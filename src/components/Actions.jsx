import React from 'react';
import { SHELF_CURRENTLY_READING, SHELF_WANT_TO_READ, SHELF_READ } from '../utilities/constant.ts';
import ActionCheck from './ActionCheck';

export default function Actions({ book, updateBook, showAddTo }) {
  return (
    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
      {showAddTo ? (
        <li>
          <a className='dropdown-item action-item disabled' href='/#'>
            <ActionCheck show={true}></ActionCheck>
            <span>Add to</span>
          </a>
        </li>
      ) : (
        <li>
          <a className='dropdown-item action-item disabled' href='/#'>
            <ActionCheck show={false}></ActionCheck>
            <span>Move to</span>
          </a>
        </li>
      )}

      <li onClick={() => updateBook(book, SHELF_CURRENTLY_READING)}>
        <a className='dropdown-item action-item' href='/#'>
          <ActionCheck show={!showAddTo && book.shelf === SHELF_CURRENTLY_READING}></ActionCheck>
          <span>Currently Reading</span>
        </a>
      </li>
      <li onClick={() => updateBook(book, SHELF_WANT_TO_READ)}>
        <a className='dropdown-item action-item' href='/#'>
          <ActionCheck show={!showAddTo && book.shelf === SHELF_WANT_TO_READ}></ActionCheck>
          <span>Want to Read</span>
        </a>
      </li>
      <li onClick={() => updateBook(book, SHELF_READ)}>
        <a className='dropdown-item action-item' href='/#'>
          <ActionCheck show={!showAddTo && book.shelf === SHELF_READ}></ActionCheck>
          <span>Read</span>
        </a>
      </li>
      {!showAddTo ? (
        <li onClick={() => updateBook(book, null)}>
          <a className='dropdown-item action-item' href='/#'>
            <ActionCheck></ActionCheck>
            <span>None</span>
          </a>
        </li>
      ) : null}
    </ul>
  );
}
