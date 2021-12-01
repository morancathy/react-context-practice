import { createContext, useState } from "react";

export const BookContext = createContext(); //this creates our context

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "book1", author: "author1", id: 1 },
    { title: "book1", author: "author1", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: Math.random() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  /* filter: cycle through array, performs callback function on each item in array
  if item matches certain condition, it keeps item in the array
  if not, it removes it
  then returns new filtered array (with removed item)
*/
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
