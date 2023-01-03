import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewBook } from "../../controller";
import './AddBook.css'

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
    price: null,
  });
 const navigate = useNavigate()
  const onInputChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
        const res = addNewBook(book)
        navigate('/')
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div className="container">


    <div className="form">
      <h1>Add New Book</h1>
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

export default AddBook;
