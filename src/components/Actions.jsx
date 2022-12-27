import React, { useContext } from 'react';
import { SHELF_CURRENTLY_READING, SHELF_WANT_TO_READ, SHELF_READ, SHELF_NONE } from '../utilities/constant.ts';
import ActionCheck from './ActionCheck';
import { BooksContext } from '../context/BooksContext.js';

export default function Actions({ book, updateBook }) {
  const books = useContext(BooksContext);
  const filterBooks = books?.filter((item) => item.id === book.id);
  const showAddTo = filterBooks == null || filterBooks.length === 0;
  if (!showAddTo) {
    book.shelf = filterBooks[0].shelf;
  }

  return (
    <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
      {showAddTo ? (
        <li>
          <div className='dropdown-item action-item disabled'>
            <ActionCheck show={true}></ActionCheck>
            <span>Add to</span>
          </div>
        </li>
      ) : (
        <li>
          <div className='dropdown-item action-item disabled'>
            <ActionCheck show={false}></ActionCheck>
            <span>Move to</span>
          </div>
        </li>
      )}

      <li onClick={() => updateBook(book, SHELF_CURRENTLY_READING)}>
        <div className='dropdown-item action-item'>
          <ActionCheck show={!showAddTo && book.shelf === SHELF_CURRENTLY_READING}></ActionCheck>
          <span>Currently Reading</span>
        </div>
      </li>
      <li onClick={() => updateBook(book, SHELF_WANT_TO_READ)}>
        <div className='dropdown-item action-item'>
          <ActionCheck show={!showAddTo && book.shelf === SHELF_WANT_TO_READ}></ActionCheck>
          <span>Want to Read</span>
        </div>
      </li>
      <li onClick={() => updateBook(book, SHELF_READ)}>
        <div className='dropdown-item action-item'>
          <ActionCheck show={!showAddTo && book.shelf === SHELF_READ}></ActionCheck>
          <span>Read</span>
        </div>
      </li>
      {!showAddTo ? (
        <li onClick={() => updateBook(book, SHELF_NONE)}>
          <div className='dropdown-item action-item'>
            <ActionCheck></ActionCheck>
            <span>None</span>
          </div>
        </li>
      ) : null}
    </ul>
  );
}
