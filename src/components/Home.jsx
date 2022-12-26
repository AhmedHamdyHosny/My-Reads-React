import React from 'react';
import CurrentlyReadingBooks from './CurrentlyReadingBooks';
import WantToReadBooks from './WantToReadBooks';
import ReadBooks from './ReadBooks';
// import { useState, useEffect } from 'react';
// import { getAllAsync } from '../BooksAPI';
import { SHELF_CURRENTLY_READING, SHELF_WANT_TO_READ, SHELF_READ } from '../utilities/constant.ts';
import addIcon from '../assets/icons/add.svg';
import { useNavigate } from 'react-router-dom';

const Home = ({ books, setBooks }) => {
  // const [books, setBooks] = useState([]);
  // const [fetchError, setFetchError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   try {
  //     getAllAsync().then((data) => {
  //       setBooks(data);
  //     });
  //   } catch (err) {
  //     // setFetchError(err.message);
  //   } finally {
  //     // setIsLoading(false);
  //   }
  // }, []);
  const getShelfBooks = (shelf) => books.filter((book) => book.shelf === shelf);
  const updateBook = (book, shelf) => {
    const listBooks = books.map((item) => (item.id === book.id ? { ...item, shelf: shelf } : item));
    setBooks(listBooks);
    const updatedBook = listBooks.filter((item) => item.id === book.id);
    console.log(updatedBook);
  };
  const navigateSearch = () => {
    navigate('/search');
  };

  return (
    <div>
      <div className='btn btn-success btn-circle btn-xl add-btn' onClick={navigateSearch}>
        <img src={addIcon} className='add-icon' alt='add' />
      </div>
      <nav className='navbar navbar-dark bg-success'>
        <div className='container-fluid justify-content-center'>
          <span className='navbar-brand text-white fw-bold'>My Reads</span>
        </div>
      </nav>
      <div className='main m-2'>
        <CurrentlyReadingBooks books={getShelfBooks(SHELF_CURRENTLY_READING)} updateBook={updateBook}></CurrentlyReadingBooks>

        <WantToReadBooks books={getShelfBooks(SHELF_WANT_TO_READ)} updateBook={updateBook}></WantToReadBooks>

        <ReadBooks books={getShelfBooks(SHELF_READ)} updateBook={updateBook}></ReadBooks>
      </div>
    </div>
  );
};

export default Home;
