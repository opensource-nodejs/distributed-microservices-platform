const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Route to send a notification
router.post('/send', notificationController.sendNotification);

module.exports = router;
