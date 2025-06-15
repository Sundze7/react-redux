import React from "react";
import { createRoot } from "react-dom/client";
// createRoot replaced the ReactDom library

import "./index.css";

const firstBook = {
  author: "Bill O'neill",
  title: "Random Fun Facts",
  img: "./images/book1.jpg",
};

const secondBook = {
  author: "Nat Geo",
  title: "50 States 5k Ideas",
  img: "./images/book2.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book />
      <Book />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<BookList />);
