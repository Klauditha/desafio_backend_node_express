const express = require('express');
const { getBooks, addBook } = require('../consultas');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Hola Mundo');
});

router.get('/users', function (req, res) {
  res.send('Listado de usuarios');
});

router.get('/books', async function (req, res) {
  const result = await getBooks();
  res.json(result);
});

router.post('/books', async function (req, res) {
  const { name, editorial, autor, precio } = req.body;
  console.log(name, editorial, autor, precio);
  const result = await addBook(name, editorial, autor, precio);
  res.send('Libro agregado');
});
module.exports = router;
