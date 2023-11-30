function reverse(input){
  let res = [];
  let arr = [];
  if (typeof input === 'string') {
    arr = Array.from(input);
  }else{
    arr = input ;
  }
  for (let i = arr.length-1; i >= 0; i--) {
    res.push(input[i]);
  }

 if (typeof input === 'string') {
     return res.join("");
  }
  return res;
}