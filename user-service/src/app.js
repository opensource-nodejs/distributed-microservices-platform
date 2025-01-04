const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// Health Check
app.get('/health', (req, res) => {
    res.status(200).send({ status: 'UP' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});
