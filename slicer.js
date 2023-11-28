function slice(input, index1, index2 = input.length) {
    let res = '';
  
    if (index1 < 0) {
      index1 = input.length + index1;
    }
  
    if (index2 < 0) {
      index2 = input.length + index2;
    }
  
    if (typeof input === 'string') {
      for (let i = index1; i < index2; i++) {
        res += input[i];
      }
    } else if (Array.isArray(input)) {
      for (let i = index1; i < index2; i++) {
        res += input[i];
      }
      return strToArr(res);
    }
  
    return res;
  }
