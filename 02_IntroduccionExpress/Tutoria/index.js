//const express = require('express');
const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Servidor corriendo en el puerto ' + PORT);
});
