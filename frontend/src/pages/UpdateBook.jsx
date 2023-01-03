import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "../../controller";
import "./AddBook.css";

function UpdateBook() {
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
    price: null,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const onInputChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const bookId = location.pathname.split("/")[2];
      const res = updateBook(book, bookId);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="form">
        <h1>Update Book</h1>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="cover"
          name="cover"
          onChange={onInputChange}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={onInputChange}
        />

        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default UpdateBook;
