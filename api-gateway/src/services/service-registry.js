const services = new Map();

const registerService = (name, url) => {
    services.set(name, url);
    console.log(`Service registered: ${name} -> ${url}`);
};

const getService = (name) => {
    return services.get(name);
};

module.exports = { registerService, getService };
