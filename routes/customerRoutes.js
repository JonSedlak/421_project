/**
 * Customer Routes - Defines API endpoints for customers.
 */
const express = require('express');
const { createCustomer } = require('../controllers/customerController');
const router = express.Router();

router.post('/create', createCustomer);

module.exports = router;
