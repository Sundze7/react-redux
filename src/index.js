import React from "react";
import { createRoot } from "react-dom/client";
// createRoot replaced the ReactDom library

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const author = "Bill O'neill";
  const title = "Random Fun Facts";
  return (
    <article className="book">
      <img src="./images/book1.jpg" alt="Random Fun Facts" />;<h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<BookList />);
