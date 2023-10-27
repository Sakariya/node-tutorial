// CommonJS, every file is module (by default) (every file in node it's module de fault)
// Modules - Encapsulated Code(only share minimum)

//  Module - basic

// const secret = 'SUPER SECRET';
// const pooja = 'pooja';
// const jigs = 'jigs';

// const sayHi = (name) =>{
//   console.log(`Hello there ${name}`);
// }

// sayHi('Dhyani');
// sayHi(pooja);
// sayHi(jigs);


// CommonJS, every file is module (by default) (every file in node it's module de fault)
// Modules - Encapsulated Code(only share minimum)
const names = require('./4-names');
// you can define as below too as direct var.
// const { pooja, peter } = require('./4-names');
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

console.log(data);

console.log(names);

sayHi('Dhyani');
sayHi(names.pooja);
sayHi(names.peter);
