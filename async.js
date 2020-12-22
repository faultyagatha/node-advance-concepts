const https = require('https');

const start = Date.now();

/** res is low level, emits events, not res of express */
const doRequest = () => {
  https.request('https://ww.google.com', res => {
    res.on('data', () => { });
    res.on('end', () => {
      console.log(Date.now() - start);
    })
  })
    .end();
}

doRequest();
doRequest();
doRequest();