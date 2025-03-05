/**
 * Customer Controller - Handles customer-related operations.
 */
const Customer = require('../models/Customer');

/**
 * Create a new customer
 */
exports.createCustomer = async (req, res) => {
    try {
        const { firstName, lastName, email, phone } = req.body;
        const customer = await Customer.create({ firstName, lastName, email, phone });
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Get customer details by ID
 */
exports.getCustomerById = async (req, res) => {
    try {
        const { customerId } = req.params;
        const customer = await Customer.findById(customerId);

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Get customer details by First and Last Name
 */
exports.getCustomerByName = async (req, res) => {
    try {
        const { firstName, lastName } = req.query;

        if (!firstName || !lastName) {
            return res.status(400).json({ error: "First name and last name are required" });
        }

        const customer = await Customer.findOne({ 
            name: `${firstName} ${lastName}` 
        });

        if (!customer) {
            return res.status(404).json({ error: "Customer not found" });
        }

        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/**
 * Delete customer by ID
 */
exports.deleteCustomer = async (req, res) => {
    try {
        const { customerId } = req.params;
        const customer = await Customer.findByIdAndDelete(customerId);

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
