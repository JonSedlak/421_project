/**
 * Customer Controller - Handles customer-related operations.
 */
const Customer = require('../models/Customer');

/**
 * Create a new customer
 */
exports.createCustomer = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const customer = await Customer.create({ name, email, phone });
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
