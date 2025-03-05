/**
 * Order Controller - Handles order-related operations.
 */
const Order = require('../models/Order');

/**
 * Create a new order for a customer.
 * Requires customerId and items.
 */
exports.createOrder = async (req, res) => {
    try {
        const { customerId, items } = req.body;
        
        if (!customerId || !items || items.length === 0) {
            return res.status(400).json({ error: "Customer ID and items are required" });
        }

        const order = await Order.create({ customerId, items });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Cancel order by ID.
 */
exports.deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findByIdAndDelete(orderId);

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Get order by ID
 */
exports.getOrderById = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId).select('_id customerId items');

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
