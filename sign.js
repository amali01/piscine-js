function sign(arg){
    if (arg > 0 ){
        return 1
    }else if (arg < 0 ){
        return -1
    }else {
        return 0
    }
}

function sameSign(n1 ,n2){
    if (sign(n1)===sign(n2)){
        return true
    }else{
        return false
    }
}