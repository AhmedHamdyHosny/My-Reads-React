import React from 'react';
import { useState, useEffect } from 'react';
import { getAllAsync, searchAsync } from '../BooksAPI';
import BookItem from './BookItem';
import BackIcon from '../assets/icons/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [searchResultBooks, setsearchResultBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setBooks([]);
    if (search && search !== '') {
      try {
        console.log('bind data');
        searchAsync(search, 10).then((data) => {
          console.log('response', data);
          if (!data.error) {
            setBooks([...data]);
          }
          console.log('books', books);
        });
      } catch (err) {
        // setFetchError(err.message);
      } finally {
        // setIsLoading(false);
      }
    }
  }, [search]);

  // useEffect(() => {
  //   getAllAsync().then((data) => {
  //     setBooks(data);
  //   });
  // }, []);

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
      <div className='search-result d-flex justify-content-center flex-wrap my-5 pb-5'>
        {books !== null && books.length > 0
          ? () => {
              return books.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map((item) => <BookItem book={item} key={item.id} />);
            }
          : null}
      </div>
    </div>
  );
};

export default Search;
