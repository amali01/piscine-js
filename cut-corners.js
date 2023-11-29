//round the input number to the nearest integer
function round(num) {
    let neg = false;

    // Check if the input is negative
    if (num < 0) {
        neg = true;
        num = -num; // Make it positive
    }

    let counter = 0;

    // Subtract the num by 1 until it's less than 1
    while (!(num < 1 && num > -1)) {
        num -= 1;
        counter++;
    }

    // Determine the rounded value based on the decimal part
    // if neg is true we go with the first value else with the 2nd { neg ?  (true) : (false) }
    if (num < 0.5) {
        return neg ? -counter : counter;
    } else {
        return neg ? -counter - 1 : counter + 1; // if 0.5 or more we roundUP
    }
}


// Function to round down to the nearest integer
function floor(num) {
    let neg = false;

    // Check if the input is negative
    if (num < 0) {
        neg = true;
        num = -num; // Make it positive
    }

    let counter = 0;

    // Subtract the num by 1 until it's less than 1
    while (!(num < 1 && num > -1)) {
        num -= 1;
        counter++;
    }

    return neg ? -counter - 1 : counter;
}

// Function to round up to the nearest integer
function ceil(num) {
  let neg = false;
    if (num === 0){
        return 0
    }
    // Check if the input is negative
    if (num < 0) {
        neg = true;
        num = -num; // Make it positive
    }

    let counter = 0;

    // Subtract the num by 1 until it's less than 1
    while (!(num < 1 && num > -1)) {
        num -= 1;
        counter++;
    }
    return neg ? -counter : counter + 1;
}

// Function to truncate decimal part and return the integer part
function trunc(num) {
    let counter = 0;
    let neg = false;

    // Adjust for extremely large numbers
    if (num > 0xfffffffff) {
        num -= 0xfffffffff;
        counter += 0xfffffffff;
    }


    // Check if the input is negative
    if (num < 0) {
        neg = true;
        num = -num; // Make it positive
    }

    // Subtract the num by 1 until it's less than 1
    while (!(num < 1 && num > -1)) {
        num -= 1;
        counter++;
    }
    return neg ? -counter : counter;
}
