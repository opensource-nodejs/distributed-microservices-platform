const Inventory = require('../models/inventoryModel');

exports.getAllItems = async () => {
    return await Inventory.find();
};

exports.addItem = async (itemData) => {
    const item = new Inventory(itemData);
    return await item.save();
};
