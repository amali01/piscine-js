// Assuming you have a global object named sourceObject

function get(key) {
    return sourceObject[key];
}

function set(key, x) {
    sourceObject[key] = x;
    return x;
}

//  //else
// function get(sourceObject, key) {
//     return sourceObject[key];
// }

// function set(sourceObject, key, x) {
//     sourceObject[key] = x;
//     return x;
// }
