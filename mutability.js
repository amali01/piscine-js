// // Deep copy using JSON.parse and JSON.stringify
// const clone1 = JSON.parse(JSON.stringify(person));
// const clone2 = JSON.parse(JSON.stringify(person));

// Shallow copy using Object.assign
const clone1 = Object.assign({}, person);
const clone2 = Object.assign({}, person);

const samePerson = person;

person.age = 78;
person.country= 'FR';