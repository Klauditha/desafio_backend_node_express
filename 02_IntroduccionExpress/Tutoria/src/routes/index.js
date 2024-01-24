const express = require('express');
const router = express.Router();
const usersRouter = require('./usersRouter');

//middleware
router.use('/users', usersRouter);

module.exports = router;
