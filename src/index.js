import React from "react";
import { createRoot } from "react-dom/client";
// createRoot replaced the ReactDom library

import "./index.css";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/715SNwhiyML._AC_UL300_SR300,200_.jpg"
      alt="Curious Minds Book"
    />
  );
};
const Title = () => <h2>Intersting Facts For Curious Minds</h2>;
const Author = () => {
  return <h4>Jordan Moore</h4>;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<BookList />);
