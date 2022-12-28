import React from 'react';
import BooksList from './BooksList';

export default function WantToReadBooks({ books, updateBook }) {
  return (
    <section className='section want-to-read'>
      <h3 className='fw-bold mb-2'>Want to Read</h3>
      <hr />
      <BooksList books={books} updateBook={updateBook}></BooksList>
    </section>
  );
}
