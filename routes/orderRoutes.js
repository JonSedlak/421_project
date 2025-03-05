const express = require('express');
const { createOrder, deleteOrder, getOrderById } = require('../controllers/orderController');
const router = express.Router();

/**
 * Route to create an order
 * @method POST /api/orders/create
 */
router.post('/create', createOrder);

/**
 * Route to delete an order by ID
 * @method DELETE /api/orders/:orderId
 */
router.delete('/delete/:orderId', deleteOrder);

/**
 * Route to get an order by ID
 * @method GET /api/orders/:orderId
 */
router.get('/get/:orderId', getOrderById);


module.exports = router;
