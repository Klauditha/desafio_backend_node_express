const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  res.send('Hola Mundo');
});

router.get('/contacto', (req, res) => {
  res.send('Contacto');
});

router.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
  res.json(users);
});

router.post('/users', (req, res) => {
  const user = req.body;
  const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
  users.push(user);
  fs.writeFileSync('./users.json', JSON.stringify(users));
  res.send('User created');
});

router.post('/register', (req, res) => {
  res.send('Register new user');
});

router.put('/update', (req, res) => {
  res.send('Update a user');
});

router.delete('/delete', (req, res) => {
  res.send('Delete a user');
});

module.exports = router;
