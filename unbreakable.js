function split(s , div){
    let res = [];
    let count = 0;
if (s.length <= 1) {
    return s
}else{
    for (let i = 0 ; i < s.length ; i ++ ){
        if (s[i] === div || i === s.length -1){
            res.push(s.substring(count,i));
            count = i+1;
        }
    }
}
return res ;
}

function join(s , div){
    let res = "";
if (s.length <= 1) {
    return toString(s)
}else{
    for (let i = 0 ; i < s.length ; i ++ ){
        for (let j = 0 ; j < s[i].length ; j ++ ){
          res += s[i][j];
        }
        if (i != s.length -1){
            res += div;
        }
    }
}
return res ;
}