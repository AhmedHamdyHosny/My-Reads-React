# My-Reads Project

This is the final assessment project for Udacity's React Fundamentals course. Home page display user bookes categorized by shelf and user can redirect to search page which can search for more books and add it in specific shelf

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAllAsync`](#getall)
- [`updateAsync`](#update)
- [`searchAsync`](#search)

### `getAll`

Method Signature:

```js
getAllAsync();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
updateAsync(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
searchAsync(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
