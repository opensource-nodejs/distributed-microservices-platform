require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/inventory', inventoryRoutes);

// MongoDB Connection
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Inventory service running on port ${PORT}`);
});
