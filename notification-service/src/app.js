const express = require('express');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notificationRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware
app.use(bodyParser.json());
app.use('/api/notifications', notificationRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).send({ message: 'Notification Service is running!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Notification Service running on port ${PORT}`);
});
