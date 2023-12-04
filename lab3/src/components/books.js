// In the 'books.js' file
import React, { useEffect } from "react";
import BookItem from "./bookItem";

function Books(props) {
  useEffect(() => {
    console.log("books " + props.myBooks);
  }, []);

  return (
    <div>
      {props.myBooks.map((book) => (
        <BookItem mybook={book} key={book.isbn} />
      ))}
    </div>
  );
}

export default Books;
