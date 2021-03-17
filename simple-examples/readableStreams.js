const fs = require('fs');

const file = './assets/fa-video.mov';

console.log(process.cwd()); //resolve the pwd path

/* an example of a read stream with video */
const readStream = fs.createReadStream(file);

readStream.on('data', (chunk) => {
  console.log(`reading a chunk ${chunk}`);
});

readStream.on('end', () => {
  console.log('read stream finished');
});

readStream.on('error', (err) => {
  console.log(`error ${err}`);
});

readStream.pause();

process.stdin.on('data', (chunk) => {
  if (chunk.toString().trim() === 'finish') {
    readStream.resume();
  }
  readStream.read();
})
