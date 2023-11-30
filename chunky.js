function chunk( arr , num){
    let res = []
    if (num > arr.length){
        return [arr]
    }else{
        
        let count = 0

        for( let i = 0 ; i < arr.length - num ; i++){
            res.push(arr.slice(i, i + num));
            i += num
            count = i
        }

        res.push(arr.slice(count, arr.length));
    }
return res
}
