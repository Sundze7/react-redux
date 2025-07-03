import React from "react";
import { createRoot } from "react-dom/client";
// createRoot replaced the ReactDom library

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <div>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {/* <EventExample /> */}
        {books.map((book, index) => {
          // const { img, title, author, id } = book;
          // return <Book key={id} img={img} title={title} author={author} />; OR

          // return <Book book={book} key={book.id} />; OR

          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </section>
    </div>
  );
};

// const EventExample = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target.value);
//     console.log("handle form input");
//   };
//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   return (
//     <section>
//       <form>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: "1rem 0" }}
//         />
//       </form>
//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   );
// };

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<BookList />);
