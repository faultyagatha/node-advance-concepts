const express = require('express');
const crypto = require('crypto');

const app = express();

app.get('/', (req, res) => {

  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    res.send("Hello, world");
  });
});

app.get('/fast', (req, res) => {
  res.send("Fast")
});

app.listen(3000);
