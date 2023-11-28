function multiply (a, b){
    // Initialize an empty string to store the repeated int
    let result = 0;

    if (a === 0 || b === 0) {
        result = 0;
        return result
    }

    // Repeat the int 'b' times
    for (let i = 0; i < Math. abs(b); i++) {
      result += a;
    }
    // If 'b' is negative, make the result negative
  if (b < 0) {
    result = 0 - result;
  }
    return result
}


function divide (a, b){
  // Initialize an empty string to store the repeated int
  let result = 0;
    if (a === 0 || b > a) {
        result = 0;
    } else if (b === 1) {
        result = a;
    } else if (b === -1) {
        result = -a;
    } else if (b === 0) {
        return Infinity;
    }else{
       // Subtract 'b' from 'a' until 'a' becomes less than 'b'
        while (a >= Math. abs(b)) {
            a -= b;
            result++;
        }
      // If 'b' is negative, make the result negative
        if (b < 0) {
            result = 0 - result;
        }
    } 


  return result
}

function modulo (a, b){
  // Subtract 'b' from 'a' until 'a' becomes less than 'b'
  while (a >=  Math.abs(b)) {
    a -= Math.abs(b);
  }
  
  return a

}