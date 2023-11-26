const escapeStr = "\`\\ \/ \"\'\`"; // special characters string 
const arr = [4,'2'] ; // array 
const obj = {
    str : 'hi',
    num : 1 ,
    bool : true ,
    undef : undefined,    
};

const nested  = {
    arr:[4,undefined,'2'],
    obj:{
        str: "reboot",
        num : 2,
        bool : false,
    }
};

Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);