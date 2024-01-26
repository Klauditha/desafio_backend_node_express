const express = require('express');
const { getBooks } = require('../consultas');
const router = express.Router();


router.get('/', function(req, res){
    res.send('Hola Mundo');
});

router.get('/users', function(req, res){
    res.send('Listado de usuarios');
})

router.get('/books', async function(req, res){
    const result = await getBooks();
    res.json(result);
})
module.exports = router