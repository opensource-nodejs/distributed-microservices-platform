const generateUUID = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
};

module.exports = {
    generateUUID,
};
