function indexOf(arr,value){
    if (arr.length===0 || value.length === 0){
        return -1
    }

    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] === value) {
          return i;
        }
    }

    return -1;
}

function lastIndexOf(arr,value){
    let res = -1;
    if (arr.length===0 || value.length === 0){
        return res
    }

    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] === value) {
          res = i;
        }
    }
    
    return res;
}

function includes(arr,value){
    if (arr.length===0 || value.length === 0){
        return false
    }

    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] === value) {
          return true;
        }
    }

    return false;
}