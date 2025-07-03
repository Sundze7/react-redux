import React from "react";

const Book = (props) => {
  const { img, title, author, getBook, number, id } = props;
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
      <span className="number">#{number + 1}</span>
      {/* <p>
        For some reason i just cant get lorem to generate text for me in this
        other computer
      </p>
      <button>click me</button> */}
    </article>
  );
};

export default Book;
