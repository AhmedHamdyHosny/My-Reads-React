import React from 'react';
import BookItem from './BookItem';

function BooksList({ books, updateBook }) {
  return (
    <div className='book-list d-flex justify-content-center flex-wrap'>
      {books.map((item) => (
        <BookItem book={item} key={item.id} updateBook={updateBook}></BookItem>
      ))}
    </div>
  );
}

export default BooksList;
