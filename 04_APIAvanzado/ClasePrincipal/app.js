const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('iS RUNNING' + PORT);
});

// middlewares
app.use(express.json());

app.use(cors());

// errors
app.use((error, req, res, next) => {
  res.status(500).send('Error en el servidor');
});

// routes
app.use('/', routes);

module.exports = app;
