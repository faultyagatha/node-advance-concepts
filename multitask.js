const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

/** OS PENDING TASK, network requst 
 * will be process in the event loop (single threaded) */
const doRequest = () => {
  https.request('https://ww.google.com', res => {
    res.on('data', () => { });
    res.on('end', () => {
      console.log('DO REQUEST: ', Date.now() - start);
    })
  })
    .end();
}

doRequest();
doRequest();

/** PENDING OPERATIONS TASK: is executed using thread pool */
const doHash = () => {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log('HASH: ', Date.now() - start);
  });
}

/** PENDING OPERATIONS TASK: is executed using thread pool
 * reading file consists of many steps, it takes time.
 * Thread pool starts calculating hash but then, when fs is complete,
 * it gets executed. Then threads process the remaining hashes.
 */
fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS: ', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
doRequest();
