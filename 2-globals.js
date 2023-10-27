// GLOBELS - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// it will print current directory path
console.log(__dirname);

// coun. print hello world every sec.
setInterval(() => {
  console.log('hello world');
}, 1000);
