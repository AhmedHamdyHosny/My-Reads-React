import React from 'react';
import CurrentlyReadingBooks from './CurrentlyReadingBooks';
import WantToReadBooks from './WantToReadBooks';
import ReadBooks from './ReadBooks';
import { SHELF_CURRENTLY_READING, SHELF_WANT_TO_READ, SHELF_READ } from '../utilities/constant.ts';
import addIcon from '../assets/icons/add.svg';
import { useNavigate } from 'react-router-dom';

const Home = ({ books, setBooks, updateBook }) => {
  const navigate = useNavigate();
  const getShelfBooks = (shelf) => books.filter((book) => book.shelf === shelf);
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
