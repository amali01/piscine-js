function get(src, path) {
    // Split the path into keys using dot as the separator
    const keys = path.split('.');
  
    // Start with the source object
    let current = src;
  
    // Iterate through keys to navigate the object
    for (const key of keys) {
      // Check if the current key exists in the object
      if (current.hasOwnProperty(key)) {
        // Move to the next level
        current = current[key];
      } else {
        // If the key doesn't exist, return undefined
        return undefined;
      }
    }
  
    // Return the final value at the specified path
    return current;
  }
  