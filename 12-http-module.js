const http = require('http');

const server = http.createServer((req, res)=> {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('here is our short history');
  }
  res.end(`
   <h1>Oops!</h1>
    <p> We can't seem to find the page your are looking for </p>
    <a href="/">back home </a>
  `);
  // it will print whole values on node console.
  // console.log(req);

  // you can use write and end too.
  // res.write('Welcome to our home page');
  // res.end();
});

// after run node app.js
// open http://localhost:5000 on your browser to see output.
server.listen(5000);
