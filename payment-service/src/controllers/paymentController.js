const { initiatePayment } = require('../services/paymentGatewayService');
const { saveTransaction } = require('../services/dbService');

exports.processPayment = async (req, res) => {
    const { userId, amount, method } = req.body;

    try {
        const paymentResult = await initiatePayment(userId, amount, method);
        await saveTransaction(userId, amount, method, paymentResult.status);

        res.status(200).json({
            message: 'Payment processed successfully',
            paymentResult,
        });
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(500).json({ error: 'Failed to process payment' });
    }
};
