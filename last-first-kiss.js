//returns its first element or character.
function first(arg) {
    return arg[0];
}
// returns its last element or character.
function last(arg) {
    return arg[arg.length - 1];
}

//returned array should contain the last and first elements or characters, in that order.
function kiss(arg) {
    return [last(arg),first(arg)];
}
