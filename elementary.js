function multiply (a, b){
    // Initialize an empty string to store the repeated int
    let result = 0;
  let count = b;
  if (b < 0){
    count *= -1;
  };

    // Repeat the int 'b' times
    for (let i = 0; i < count; i++) {
      result += a;
    }
    return result
}

function divide (a, b){
  // Initialize an empty string to store the repeated int
  let result = 0;
  

  // Subtract 'b' from 'a' until 'a' becomes less than 'b'
  while (a >= b) {
    a -= b;
    result++;
  }

  return result
}

function modulo (a, b){
  // Subtract 'b' from 'a' until 'a' becomes less than 'b'
  while (a >= b) {
    a -= b;
  }
  
  return a

}