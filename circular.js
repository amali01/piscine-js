// Create an empty object as we can't use it as value directly 
const circular = {};

// Add a property named "circular" with a reference to itself as it's already been initialized
circular.circular = circular;