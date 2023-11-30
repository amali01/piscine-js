function reverse(input){
  let res = [];
  let arr = [];
  if (typeof input === 'string') {
    arr = Array.from(input);
  }else{
    arr = input ;
  }
  for (let i = len(arr)-1; i >= 0; i--) {
    res.push(input[i]);
  }
  return res;
    
}
