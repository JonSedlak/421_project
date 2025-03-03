/**
 * Customer Model - Defines the structure of a customer document in MongoDB.
 */
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);
