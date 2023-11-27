// from Array to Set
function arrToSet(arr) {
    return new Set(arr);
}

// from Array to string
function arrToStr(arr) {
    return arr.toString().replaceAll(",", "");
}

// from Set to Array
function setToArr(set) {
    return Array.from(set);
}

// from Set to string
function setToStr(set) {
    return Array.from(set).join('');
}

// from string to Array
function strToArr(str){
    return str.split("");
}

// from string to Set
function strToSet(str){
    return new Set(str);
}

// from Map to Object
function mapToObj(map){
    const obj ={};
    map.forEach((value,key) => {
        obj[key]=value;
    });
    return obj;
}

// from Object to Array
function objToArr(obj) {
    return Object.values(obj);
}

// from Object to Map
function objToMap(obj) {
    return new Map(Object.entries(obj));
}

// from Array to Object
function arrToObj(arr) {
    const obj = {};
    arr.forEach((item, index) => {
        obj[index] = item;
    });
    return obj;
}

// from string to Object
function strToObj(str) {
    return Object.fromEntries(str.split('').map((char, index) => [index, char]));
}

// to determine the "super type" of a value
function superTypeOf(value) {
    if (value === undefined){
        return 'undefined';
    }else if (value === null){
        return 'null';
    }else if (value === null){
        return 'null';
    }else if (Array.isArray(value)) {
        return 'Array';
    } else if (value instanceof Set) {
        return 'Set';
    } else if (value instanceof Map) {
        return 'Map';
    } else {
        return capitalizeFirstLetter(typeof value);
    }
}

// capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}