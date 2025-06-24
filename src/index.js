import React from "react";
import { createRoot } from "react-dom/client";
// createRoot replaced the ReactDom library

import "./index.css";

const books = [
  {
    author: "Bill O'neill",
    title: "Random Fun Facts",
    img: "./images/book1.jpg",
    id: 1,
  },

  {
    author: "Nat Geo",
    title: "50 States 5k Ideas",
    img: "./images/book2.jpg",
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {/* <EventExample /> */}
      {books.map((book) => {
        // const { img, title, author, id } = book;
        // return <Book key={id} img={img} title={title} author={author} />; OR

        // return <Book book={book} key={book.id} />; OR

        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
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

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // this is a wrapper function which helps pass down the id of getBook() as prop from parent to child
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook} style={{ padding: "0.5rem" }}>
        Click me
      </button>
      <h4>{author}</h4>
      {/* <p>
        For some reason i just cant get lorem to generate text for me in this
        other computer
      </p>
      <button>click me</button> */}
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<BookList />);
