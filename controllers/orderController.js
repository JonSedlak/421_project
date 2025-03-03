/**
 * Order Controller - Handles order-related operations.
 */
const Order = require('../models/Order');

/**
 * Create a new order for a customer.
 */
exports.createOrder = async (req, res) => {
    try {
        const { customerId, items } = req.body;
        const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const order = await Order.create({ customerId, items, totalAmount });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Cancel an existing order by ID.
 */
exports.cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findByIdAndUpdate(orderId, { status: 'Cancelled' }, { new: true });
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
