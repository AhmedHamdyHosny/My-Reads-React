import './App.css';
import CurrentlyReadingBooks from './components/CurrentlyReadingBooks';
import WantToReadBooks from './components/WantToReadBooks';
import ReadBooks from './components/ReadBooks';
import { useState, useEffect } from 'react';
import './BooksAPI';
import { getAllAsync } from './BooksAPI';
import { SHELF_CURRENTLY_READING, SHELF_WANT_TO_READ, SHELF_READ } from './utilities/constant.ts';

function App() {
  const [books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      getAllAsync().then((data) => {
        setBooks(data);
      });
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getShelfBooks = (shelf) => books.filter((book) => book.shelf === shelf);
  const updateBook = (book, shelf) => {
    const listBooks = books.map((item) => (item.id === book.id ? { ...item, shelf: shelf } : item));
    setBooks(listBooks);

    const updatedBook = listBooks.filter((item) => item.id === book.id);
    // const updateOptions = {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ checked: myItem[0].checked })
    // };
    // const reqUrl = `${API_URL}/${id}`;
    // const result = await apiRequest(reqUrl, updateOptions);
    // if (result) setFetchError(result);
  };
  return (
    <div>
      <button type='button' className='btn btn-success btn-circle btn-xl add-btn'>
        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' viewBox='0 0 448 512'>
          <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
        </svg>
      </button>

      <nav className='navbar navbar-dark bg-success'>
        <div className='container-fluid justify-content-center'>
          <span className='navbar-brand text-white fw-bold'>My Reads</span>
        </div>
      </nav>
      <div className='main m-2'>
        <CurrentlyReadingBooks books={getShelfBooks(SHELF_CURRENTLY_READING)} updateBook={updateBook}></CurrentlyReadingBooks>

        <WantToReadBooks books={getShelfBooks(SHELF_WANT_TO_READ)} updateBook={updateBook}></WantToReadBooks>

        <ReadBooks books={getShelfBooks(SHELF_READ)} updateBook={updateBook}></ReadBooks>

        <button type='button' className='btn btn-primary btn-floating float-right'>
          {/* <i className='fas fa-download'></i> */}
          <span>test</span>
        </button>
      </div>
    </div>
  );
}

export default App;
