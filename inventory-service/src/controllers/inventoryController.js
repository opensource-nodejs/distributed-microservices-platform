const inventoryService = require('../services/inventoryService');

exports.getAllItems = async (req, res) => {
    try {
        const items = await inventoryService.getAllItems();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
};

exports.addItem = async (req, res) => {
    try {
        const newItem = await inventoryService.addItem(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add item' });
    }
};
