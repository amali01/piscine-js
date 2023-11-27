// Function to create a new block in the blockchain
function blockChain(data, prev = null) {
    // If there's no previous block (for the first block in the chain), create a default one
    if (prev === null) {
        prev = {
            index: 0,
            hash: '0',
        };
    }

    // Return a new block object
    return {
        index: prev.index + 1, // Increment the index for the new block
        hash: hashCode(
            (prev.index + 1).toString() + prev.hash + JSON.stringify(data)
        ), // Calculate the hash for the new block
        data: data, // Store the data in the new block
        prev: prev, // Link to the previous block
        chain: function (data) {
            // Function to chain a new block, recursively calling blockChain
            return blockChain(data, this); // Use 'this' instead of 'block' to reference the current object
        },
    };
}