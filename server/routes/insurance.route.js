const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insurance.controller');

router.post('/new', insuranceController.newRequest);

module.exports = router;