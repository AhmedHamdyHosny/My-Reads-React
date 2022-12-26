import React from 'react';
import Actions from './Actions';

function BookItem({ book, updateBook }) {
  return (
    <div className='book-card'>
      <div className='position-relative'>
        <img src={book.imageLinks.thumbnail} alt='...' />
        <div className='book-card-action-btn dropdown'>
          <button className='btn btn-success dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'></button>
          <Actions book={book} updateBook={updateBook}></Actions>
        </div>
      </div>
      <div className='mt-2'>
        <h5>{book.title}</h5>
        {book.authors
          ? book.authors.map((author) => (
              <p className='card-text text-muted fw-bold' key={author}>
                {author}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}

export default BookItem;
