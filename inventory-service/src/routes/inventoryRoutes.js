const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/items', inventoryController.getAllItems);
router.post('/items', inventoryController.addItem);

module.exports = router;
