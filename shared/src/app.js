const express = require('express');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const config = require('./configs');

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

// Routes
app.get('/health', (req, res) => {
    res.json({ status: 'Shared module is running!' });
});

app.get('/generate-uuid', (req, res) => {
    const { generateUUID } = require('./utils/helper');
    res.json({ uuid: generateUUID() });
});

// Error handling
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
    logger.info(`Shared module is running on port ${config.port}`);
});
