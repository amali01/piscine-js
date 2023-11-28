function slice(input, index1, index2 = input.length - 1) {
    let res = '';
  
    if (typeof input === 'string') {
      for (let i = index1; i <= index2; i++) {
        res += input[i];
      }
    } else if (Array.isArray(input)) {
       let str = input.toString().join('')
      for (let i = index1; i <= index2; i++) {
        res += str[i];
      }
    }

    return res ;
}