import React from 'react';
import { useState, useEffect } from 'react';
import { searchAsync } from '../BooksAPI';
import BookItem from './BookItem';
import BackIcon from '../assets/icons/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchResultBooks, setSearchResultBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setSearchResultBooks([]);
    if (search && search !== '') {
      try {
        searchAsync(search, 10).then((data) => {
          if (!data.error) {
            setSearchResultBooks([...data]);
          } else {
            setSearchResultBooks([]);
          }
        });
      } catch (err) {
        // setFetchError(err.message);
      } finally {
        // setIsLoading(false);
      }
    }
  }, [search]);

  const navigateHome = () => {
    navigate('/');
  };

  const updateBook = (book, shelf) => {
    console.log('book', book);
    console.log('shelf', shelf);
    // const listBooks = books.map((item) => (item.id === book.id ? { ...item, shelf: shelf } : item));
    // setBooks(listBooks);
    // const updatedBook = listBooks.filter((item) => item.id === book.id);
    // console.log(updatedBook);
  };

  return (
    <div className='search-main'>
      <div className='search'>
        <i className='arrow-back' onClick={navigateHome}>
          <img src={BackIcon} className='back-icon' alt='back' />
        </i>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} className='form-control' placeholder='Search by title, author, or ISBN' />
      </div>
      <div className='search-result d-flex justify-content-center flex-wrap my-5 pb-5'>{searchResultBooks ? searchResultBooks.map((item) => <BookItem book={item} key={item.id} updateBook={updateBook} />) : null}</div>
    </div>
  );
};

export default Search;
