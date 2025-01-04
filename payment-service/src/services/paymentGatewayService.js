exports.initiatePayment = async (userId, amount, method) => {
    // Simulate integration with a payment gateway
    console.log(`Initiating payment for user ${userId} via ${method}`);
    return {
        transactionId: Math.random().toString(36).substr(2, 9),
        status: 'success',
        amount,
    };
};
