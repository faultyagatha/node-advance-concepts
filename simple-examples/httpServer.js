const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') res.write('Hello world');
//   res.end();
// })

//send static files
const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream('./static/index.html');
  res.writeHead(200, { 'Content-type': 'text/html' });
  readStream.pipe(res);
})

server.listen('3000', () => {
  console.log('Listening on port 3000');
})