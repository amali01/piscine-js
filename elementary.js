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
    let result =0;
    const A = a;
      if (a === 0 || b > Math. abs(a)) {
          result = 0;
      } else if (b === 1) {
          result = a;
      } else if (b === -1) {
          result = -a;
      } else if (b === 0) {
          return Infinity;
      }else{
         // Subtract 'b' from 'a' until 'a' becomes less than 'b'
          while (Math. abs(a) >= Math. abs(b)) {
             a  = Math. abs(a) - Math. abs(b);
              result++;
          }

        // check if the result need to be negative
        if (b < 0 && A < 0)  {
            return result
        } else if (b < 0 || A < 0)  {
            result = 0 - result;
        }
      } 
    return result
}

function modulo (a, b){
    // Initialize an empty string to store the repeated int
    const A = a;
      if (a === 0 || b > Math. abs(a)) {
          return a ;
      } else if (b === 1) {
          return a;
      } else if (b === -1) {
          a = -a;
      } else if (b === 0) {
          return Infinity;
      }else{
         // Subtract 'b' from 'a' until 'a' becomes less than 'b'
          while (Math. abs(a) >= Math. abs(b)) {
             a  = Math. abs(a) - Math. abs(b);
          }

            // check if the result need to be negative
            if (A < 0)  {
                a = 0 - a;
            }
        } 
    return a
}