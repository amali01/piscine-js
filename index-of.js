function indexOf(arr,value,index=0){
    if (arr.length===0 || value.length === 0){
        return -1;
    }

    for (let i = index ; i < arr.length; i++) {
        if (arr[i] === value) {
          return i;
        }
    }

    return -1;
}

function lastIndexOf(arr,value,index=arr.length-1){
    if (arr.length===0 || value.length === 0){
        return  -1;
    }

    for (let i = index ; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    
    return  -1;
}

function includes(arr,value,index=0){
    if (arr.length===0 || value.length === 0){
        return false
    }

    for (let i = index ; i < arr.length; i++) {
        if (arr[i] === value) {
          return true;
        }
    }

    return false;
}