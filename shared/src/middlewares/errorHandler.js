const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
    logger.error(`Error: ${err.message}`, { stack: err.stack });
    res.status(500).json({ error: 'Something went wrong!' });
};

module.exports = errorHandler;
