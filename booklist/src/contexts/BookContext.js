import { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext(); //this creates our context

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   { title: "book1", author: "author1", id: 1 },
  //   { title: "book2", author: "author2", id: 2 },
  // ]);
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: Math.random() }]);
  // };

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };
  /* filter: cycle through array, performs callback function on each item in array
  if item matches certain condition, it keeps item in the array
  if not, it removes it
  then returns new filtered array (with removed item)
*/
  return (
    // <BookContext.Provider value={{ books, addBook, removeBook }}>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
