// Define is.num and is.nan functions
const is = {
    num: (n) => typeof n === 'number' && !isNaN(n),
    nan: (n) => isNaN(n)
};

// Define getAcceleration function
function getAcceleration(obj) {
    if (is.num(obj.f) && is.num(obj.m)) {
        return  obj.f / obj.m ;
    }
    if (is.num(obj.Δv) && is.num(obj.Δt)) {
        return  obj.Δv / obj.Δt ;
    }
    if (is.num(obj.d) && is.num(obj.t)) {
        return  (2 * obj.d) / (obj.t * obj.t) ;
    }
    return "impossible";
}