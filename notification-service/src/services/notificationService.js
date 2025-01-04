// Simulate sending a notification
exports.sendNotification = (recipient, message, type) => {
    const notificationTypes = ['email', 'sms', 'push'];

    if (!notificationTypes.includes(type)) {
        throw new Error(`Invalid notification type. Supported types: ${notificationTypes.join(', ')}`);
    }

    console.log(`Sending ${type} notification to ${recipient}: ${message}`);
    return { recipient, message, type, status: 'sent' };
};
