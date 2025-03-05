/**
 * Order Model - Represents an order placed by a customer.
 */
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    items: [{ product: String, quantity: Number }]
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
