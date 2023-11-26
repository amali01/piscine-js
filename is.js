is.num = (n) => (typeof n === 'number');
is.nan = (n) => Numbe.isNaN(n);
is.str = (n) => (typeof n === 'string');
is.bool = (n) => (typeof n === 'boolean');
is.undef = (n) => (typeof n === 'undefined');
is.def = (d) => !(typeof u === 'undefined');
is.arr = (n) => (typeof n === 'array');
is.obj = (n) => (o) => {
    (typeof o === 'object') && (o === null) && !(Array.isArray(o));
}

is.fun = (f) => (typeof f === 'function');
is.truthy = (t) => (t == true);
is.falsy = (f) => (f == false);