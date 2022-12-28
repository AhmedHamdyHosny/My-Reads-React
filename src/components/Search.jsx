import React from 'react';
import { useState, useEffect } from 'react';
import { searchAsync } from '../BooksAPI';
import BookItem from './BookItem';
import BackIcon from '../assets/icons/arrow-back.svg';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../utilities/useDebounce';

const Search = ({ updateBook }) => {
  const [search, setSearch] = useState('');
  const [searchResultBooks, setSearchResultBooks] = useState([]);
  const debouncedValue = useDebounce(search, 500);
  const navigate = useNavigate();
  useEffect(() => {
    setSearchResultBooks([]);
    if (debouncedValue && debouncedValue !== '') {
      try {
        searchAsync(debouncedValue, 10).then((data) => {
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
  }, [debouncedValue]);

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className='search-main'>
      <div className='search'>
        <i className='arrow-back' onClick={navigateHome}>
          <img src={BackIcon} className='back-icon' alt='back' />
        </i>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} className='form-control' placeholder='Search by title, author, or ISBN' />
      </div>
      <div className='search-result d-flex justify-content-center flex-wrap my-5 pb-5'>{searchResultBooks && searchResultBooks.length > 0 ? searchResultBooks.map((item) => <BookItem book={item} key={item.id} updateBook={updateBook} />) : <h5> No Book Found</h5>}</div>
    </div>
  );
};

export default Search;
