const express = require('express');
const { createCustomer, getCustomerById, deleteCustomer, getCustomerByName } = require('../controllers/customerController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: API endpoints for managing customers
 */

/**
 * @swagger
 * /api/customers/create:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       500:
 *         description: Server error
 */
router.post('/create', createCustomer);

/**
 * @swagger
 * /api/customers/customerName:
 *   get:
 *     summary: Get customer by first and last name
 *     tags: [Customers]
 *     parameters:
 *       - in: query
 *         name: firstName
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: lastName
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer found
 *       404:
 *         description: Customer not found
 */
router.get('/customerName', getCustomerByName);

/**
 * @swagger
 * /api/customers/{customerId}:
 *   get:
 *     summary: Get customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer retrieved successfully
 *       404:
 *         description: Customer not found
 */
router.get('/:customerId', getCustomerById);

/**
 * @swagger
 * /api/customers/{customerId}:
 *   delete:
 *     summary: Delete a customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer deleted successfully
 *       404:
 *         description: Customer not found
 */
router.delete('/:customerId', deleteCustomer);

module.exports = router;
