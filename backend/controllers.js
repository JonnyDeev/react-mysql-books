const mysql = require("mysql");

const db = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b8d1801cb3ece7",
  password: "f9a4a5a2",
  database: "heroku_9954bc80621413b?",
});
// mysql://b8d1801cb3ece7:f9a4a5a2@us-cdbr-east-06.cleardb.net/heroku_9954bc80621413b?
const home = (req, res) => {
  res.send("Hello home!");
};
const getBooks = (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
const addNewBook = (req, res) => {
  console.log(req.body);
  const { title, description, cover, price } = req.body;
  const q =
    "INSERT INTO books (`title`, `description`, `cover`, `price`) VALUES(?)";
  const values = [title, description, cover, price];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been added successfully");
  });
};

const deleteBook = (req, res) => {
  console.log(req.body);
  const q = "DELETE FROM books WHERE id = ?";
  db.query(q, [req.body.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully");
  });
};

const updateBook = (req, res) => {
  const bookId = req.params.id;
  const { title, cover, description, price } = req.body;
  const values = [title, description, cover, price];
  console.log(values);
  const q =
    "UPDATE books SET title = ?, description = ?, cover = ?, price = ? WHERE id = ?";
  db.query(q, [...values, id=bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated successfully");
  });
};
module.exports = { home, getBooks, addNewBook, deleteBook, updateBook };
