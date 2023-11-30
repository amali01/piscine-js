function split(s , div){
    let res = [];
    let count = 0;
if (s.length <= 1) {
    return s
}else{
    for (let i = 0 ; i <= s.length - div.length ; i ++ ){
        if (s.substring(i,i+div.length)=== div){
            res.push(s.substring(count,i));
            count = i+div.length;
        }else if (s.substring(i,i+div.length)=== div && i ===  s.length - div.length){
            res.push("");
            return res
        }
    }
    res.push(s.substring(count));
    
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