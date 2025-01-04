require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/paymentRoutes');
const { connectToDatabase } = require('./services/dbService');

const app = express();
const PORT = process.env.SERVICE_PORT || 5002;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/payments', paymentRoutes);

// Start the server
app.listen(PORT, async () => {
    console.log(`Payment Service is running on port ${PORT}`);
    await connectToDatabase();
});
