//  OS is built-in module:
const os = require('os');
// info about current user;
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);

// get current oprating system info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
};

console.log(currentOS);
