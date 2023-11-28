function repeat(str , num){
    // Initialize an empty string to store the repeated string
    let result = '';
  
    // Repeat the string 'num' times
    for (let i = 0; i < num; i++) {
      result += str;
    }
    return result
}