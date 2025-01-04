const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const healthController = require('../controllers/health-controller');

const router = express.Router();

// Health Check Endpoint
router.get('/health', healthController);

// Proxy routes
router.use('/users', createProxyMiddleware({ target: process.env.USER_SERVICE_URL, changeOrigin: true }));
router.use('/inventory', createProxyMiddleware({ target: process.env.INVENTORY_SERVICE_URL, changeOrigin: true }));
router.use('/payments', createProxyMiddleware({ target: process.env.PAYMENT_SERVICE_URL, changeOrigin: true }));
router.use('/notifications', createProxyMiddleware({ target: process.env.NOTIFICATION_SERVICE_URL, changeOrigin: true }));

module.exports = router;
