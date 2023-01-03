import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Books.css";
import { deleteBook, getBooks } from "../../controller";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const res = getBooks().then((response) => setBooks(response));
    // console.log(books);
  }, []);

  const handleDelete = (id) => {
    // console.log(id)
    const res = deleteBook(id);
    window.location.reload()
  };
  const handleUpdate = () => {};
  return (
    <>
      <div className="main-container">
        <header>Book Store</header>
        <div className="container">
          {books
            ? books.map((bk) => (
                <div className="book" key={bk.id}>
                  {bk.cover && <img src={bk.cover} alt="" />}
                  <h2>{bk.title}</h2>
                  <p className="description">{bk.description}</p>
                  <span>${bk.price}</span>
                  <div className="btn-container">
                    <button
                      onClick={() => handleDelete(bk.id)}
                      className="delete btn btn-text"
                    >
                      Delete
                    </button>
                    <Link to={`/update/${bk.id}`} className="update btn btn-text">
                      Update
                    </Link>
                  </div>
                </div>
              ))
            : null}
        </div>
        <Link className="btn btn-text" to="/add">
          Add New Book
        </Link>
      </div>
    </>
  );
}

export default Books;
