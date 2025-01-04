const User = require('../models/userModel');

// Get all users
exports.getAllUsers = async () => {
    return await User.find({});
};

// Create a new user
exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};
