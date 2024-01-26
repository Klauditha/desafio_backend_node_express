const { pool } = require('./config/db');

const getBooks = async (name, editorial, autor, precio) => {
  const { rows } = await pool.query('SELECT * FROM books');
  console.log(rows);
  return rows;
};

const addBook = async (name, editorial, autor, precio) => {
  const { rows } = await pool.query(
    'INSERT INTO books (name, editorial, autor, precio) VALUES ($1, $2, $3, $4)',
    [name, editorial, autor, precio]
  );
  return rows;
};

module.exports = {
  getBooks,
  addBook,
};
