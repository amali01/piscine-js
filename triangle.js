function triangle(str , num){
    let res = ""
for (let i = 0 ; i < num ; i++){
    for (let j = 0 ; j <= i ; j++){
        res += str 
    }
    if (i != num -1){
        res += "\n" 
    }

}
return res
}