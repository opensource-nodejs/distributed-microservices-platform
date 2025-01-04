require('dotenv').config();

module.exports = {
    port: process.env.SERVICE_PORT || 5050,
    logLevel: process.env.LOG_LEVEL || 'info',
};
