process.env.UV_THREADPOOL_SIZE = 1;

const express = require('express');
const cluster = require('cluster');
const crypto = require('crypto');

//is the file being executed in master mode?
if (cluster.isMaster) {
  //make index.js to be executed **again** but in 'child' mode
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
} else {
  const app = express();

  // const doWork = (duration) => {
  //   const start = Date.now();
  //   while (Date.now() - start < duration) { }
  // }

  app.get('/', (req, res) => {

    //hang our event loop
    // doWork(5000)
    crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
      res.send("Hello, world");
    });
  });

  app.get('/fast', (req, res) => {
    res.send("Fast")
  });

  app.listen(3000);
}