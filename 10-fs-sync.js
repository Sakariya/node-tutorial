const { readFileSync, writeFileSync } = require('fs');

const { readFile, writeFile } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');


// console.log(first, second);

// this will create new file and add text file
// if file exists then overlapp file content
// writeFileSync(
//   './content/result-sync.txt',
//   `here is the result : ${first}, ${second} `
// );

// { flag: 'a'} will work for append contain on file instead of overlap
writeFileSync(
  './content/result-sync.txt',
  `here is the result : ${first}, ${second} `,
  { flag: 'a'}
);
console.log('done with this task');
console.log('starting the next one');
