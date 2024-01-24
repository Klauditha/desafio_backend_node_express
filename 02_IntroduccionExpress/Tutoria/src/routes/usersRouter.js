const express = require('express');
const { usersController } = require('../controllers/index');
const { getAllUsers, createUser } = usersController;
const router = express.Router();

router.get('/get-all-users', getAllUsers);
router.post('/create-user', createUser);

module.exports = router;
