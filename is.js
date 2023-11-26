is.num = (n) => (typeof n === 'number');
is.nan = (n) => Number.isNaN(n);
is.str = (s) => (typeof s === 'string');
is.bool = (b) => (typeof b === 'boolean');
is.undef = (u) => (typeof u === 'undefined');
is.def = (d) => !is.undef(d);
is.arr = (a) => (Array.isArray(a));
is.obj = (o) => (typeof o === 'object' && o !== null && !Array.isArray(o));
is.fun = (f) => (typeof f === 'function');
is.truthy = (t) => (t == true ? true : false);
is.falsy = (f) => (f == false ? false : true);

