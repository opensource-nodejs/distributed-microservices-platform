require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');

const app = express();

// Middleware for logging
app.use(morgan('dev'));

// Middleware for parsing JSON
app.use(express.json());

// Route definitions
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
