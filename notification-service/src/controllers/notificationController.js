const notificationService = require('../services/notificationService');

// Send Notification
exports.sendNotification = (req, res) => {
    const { recipient, message, type } = req.body;

    if (!recipient || !message || !type) {
        return res.status(400).json({ error: 'Recipient, message, and type are required' });
    }

    const notificationResult = notificationService.sendNotification(recipient, message, type);
    res.status(200).json({ message: 'Notification sent successfully!', result: notificationResult });
};
