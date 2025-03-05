const express = require('express');
const { createCustomer, getCustomerById, deleteCustomer, getCustomerByName } = require('../controllers/customerController');
const router = express.Router();

/**
 * Route to create a new customer
 * @method POST /api/customers/create
 */
router.post('/create', createCustomer);

/**
 * Route to get customer details by ID
 * @method GET /api/customers/:customerId
 */
router.get('/:customerId', getCustomerById);

/**
 * Route to get customer details by First and Last Name
 * @method GET /api/customers/search?firstName=John&lastName=Doe
 */
router.get('/search', getCustomerByName);

/**
 * Route to delete customer by ID
 * @method DELETE /api/customers/:customerId
 */
router.delete('/:customerId', deleteCustomer);

module.exports = router;
