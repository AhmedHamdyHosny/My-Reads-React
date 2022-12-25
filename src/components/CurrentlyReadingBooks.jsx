import React from 'react';
import BooksList from './BooksList';

export default function CurrentlyReadingBooks({ books, updateBook }) {
  return (
    <section className='section currently-reading'>
      <h3 className='fw-bold mb-2'>Currently Reading</h3>
      <hr />
      <BooksList books={books} updateBook={updateBook}></BooksList>
    </section>
  );
}
