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
        const customer = await Customer.findById(customerId).select('_id firstName lastName email phone');

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
 * Returns only _id, firstName, lastName, email, and phone.
 */
exports.getCustomerByName = async (req, res) => {
    try {
        const { firstName, lastName } = req.query;

        if (!firstName || !lastName) {
            return res.status(400).json({ error: "First name and last name are required" });
        }

        // Find customer by firstName and lastName, selecting only specific fields
        const customer = await Customer.findOne({ firstName, lastName })
                                      .select('_id firstName lastName email phone');

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

/**
 * Get all customers
 */
exports.getCustomers = async (req, res) => {
    try {
        // Fetch all customers, selecting only the necessary fields
        const customers = await Customer.find().select('_id firstName lastName email phone');

        if (!customers || customers.length === 0) {
            return res.status(404).json({ error: 'No customers found' });
        }

        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
