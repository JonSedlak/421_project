/**
 * Order Routes - Defines API endpoints for orders.
 */
const express = require('express');
const { createOrder, cancelOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/create', createOrder);
router.put('/cancel/:orderId', cancelOrder);

module.exports = router;
