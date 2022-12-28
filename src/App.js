import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import { useState, useEffect } from 'react';
import { getAllAsync, updateAsync } from './BooksAPI';
import { BooksContext } from './context/BooksContext.js';
// import { SHELF_NONE } from './utilities/constant.ts';

function App() {
  const [books, setBooks] = useState([]);
  // const [fetchError, setFetchError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      bindBooks();
    } catch (err) {
      // setFetchError(err.message);
    } finally {
      // setIsLoading(false);
    }
  }, []);
  const bindBooks = () => {
    getAllAsync().then((data) => {
      setBooks(data);
      console.log('bind books', data);
    });
  };
  const moveBook = (book, shelf) => {
    if (book.shelf !== shelf) {
      console.log('update shelf');
      updateAsync(book, shelf).then((data) => {
        setBooks(books.map((item) => (item.id === book.id ? { ...item, shelf: shelf } : item)));
        console.log(books);
        bindBooks();
        // if (shelf === SHELF_NONE) {
        //   bindBooks();
        // } else {
        //   setBooks(books.map((item) => (item.id === book.id ? { ...item, shelf: shelf } : item)));
        // }
      });
    }
    // const listBooks = books.map((item) => (item.id === book.id ? { ...item, shelf: shelf } : item));
    // setBooks(listBooks);
    // const updatedBook = listBooks.filter((item) => item.id === book.id);
    // console.log(updatedBook);
  };
  const addBook = (book, shelf) => {
    updateAsync(book, shelf).then((data) => {
      setBooks([...books, { ...book, shelf: shelf }]);
    });
  };
  const updateBook = (book, shelf) => {
    const filterBooks = books?.filter((item) => item.id === book.id);
    const isExist = filterBooks != null && filterBooks.length > 0;
    if (isExist) {
      moveBook(book, shelf);
    } else {
      addBook(book, shelf);
    }
  };

  return (
    <div className='App'>
      <BooksContext.Provider value={books}>
        <Routes>
          <Route path='/' element={<Home books={books} setBooks={setBooks} updateBook={updateBook} />}></Route>
          <Route path='/search' element={<Search updateBook={updateBook} />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BooksContext.Provider>
    </div>
  );
}

export default App;
