// CommonJS, every file is module (by default) (every file in node it's module de fault)
// Modules - Encapsulated Code(only share minimum)

const sayHi = (name) =>{
  console.log(`Hello there ${name}`);
}

// export default
module.exports = sayHi;
