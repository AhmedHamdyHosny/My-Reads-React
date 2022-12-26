import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import { useState, useEffect } from 'react';
import { getAllAsync } from './BooksAPI';
import { BooksContext } from './context/BooksContext.js';

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    try {
      getAllAsync().then((data) => {
        setBooks(data);
      });
    } catch (err) {
      // setFetchError(err.message);
    } finally {
      // setIsLoading(false);
    }
  }, []);
  return (
    <div className='App'>
      <BooksContext.Provider value={books}>
        <Routes>
          <Route path='/' element={<Home books={books} setBooks={setBooks} />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </BooksContext.Provider>
    </div>
  );
}

export default App;
