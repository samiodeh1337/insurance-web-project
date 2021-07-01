const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.get('/getusers', UserController.getAll);
router.post('/login', UserController.login);

module.exports = router;