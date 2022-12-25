import React from 'react';
import BooksList from './BooksList';

export default function ReadBooks({ books, updateBook }) {
  return (
    <section className='section read'>
      <h3 className='fw-bold mb-2'>Read</h3>
      <hr />
      <BooksList books={books} updateBook={updateBook}></BooksList>
    </section>
  );
}
