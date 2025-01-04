const mongoose = require('mongoose');
const PaymentTransaction = require('../models/PaymentTransaction');

// Connect to the database
exports.connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

// Save transaction details to the database
exports.saveTransaction = async (userId, amount, method, status) => {
    const transaction = new PaymentTransaction({
        userId,
        amount,
        method,
        status,
        createdAt: new Date(),
    });
    return await transaction.save();
};
