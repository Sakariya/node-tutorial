
// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>
// ex. npm i bootstrap OR npm install bootstrap

// global dependency - use it in any project
// npm install -g <packagename>
// sudo  npm install -g <packagename> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everythinh default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);

console.log(newItems)
