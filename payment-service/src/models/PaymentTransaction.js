const mongoose = require('mongoose');

const PaymentTransactionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    method: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PaymentTransaction', PaymentTransactionSchema);
