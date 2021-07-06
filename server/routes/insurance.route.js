const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insurance.controller');

router.get('/getall', insuranceController.getall);
router.post('/new', insuranceController.newRequest);
router.post('/calc', insuranceController.calculate);
module.exports = router;