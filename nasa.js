function nasa(n){
    let res = "";
    for (let i = 1; i <= n ; i++ ) {
        if (i%3 === 0 && i%5 === 0){
            res += "NASA"
        }else if (i%3 === 0 ){
            res += "NA"
        }else if (i%3 === 0 ){
            res += "SA"
        }
    }
    return res
}