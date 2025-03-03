/**
 * Payment Controller - Handles payment-related operations.
 */
const Payment = require('../models/Payment');
const Order = require('../models/Order');

/**
 * Submit payment for an order.
 */
exports.submitPayment = async (req, res) => {
    try {
        const { orderId, amount } = req.body;
        const order = await Order.findById(orderId);
        if (!order) return res.status(404).json({ error: 'Order not found' });

        if (order.totalAmount !== amount) {
            return res.status(400).json({ error: 'Incorrect payment amount' });
        }

        const payment = await Payment.create({ orderId, amount, status: 'Completed' });

        await Order.findByIdAndUpdate(orderId, { status: 'Completed' });

        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
