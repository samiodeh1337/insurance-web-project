const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insurance.controller');

router.get('/getall', insuranceController.getall);
router.post('/new', insuranceController.newRequest);

module.exports = router;