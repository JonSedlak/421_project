/**
 * Payment Routes - Defines API endpoints for payments.
 */
const express = require('express');
const { submitPayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/submit', submitPayment);

module.exports = router;
