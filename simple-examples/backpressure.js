const { createReadStream, createWriteStream } = require('fs');

/** example of backpressure
 * in real-life, use pipe instead of manual backpressure
 */
const file = './assets/fa-video.mov';

const readStream = createReadStream(file);
const writeStream = createWriteStream('./assets/fa-video-copy.mov', {
  //highWaterMark: 1628920128
});

readStream.on('data', (chunk) => {
  const result = writeStream.write(chunk);
  //check if we have backpressure
  if (!result) {
    console.log('backpressure')
    readStream.pause();
  }
});

readStream.on('error', (error) => {
  console.log('an error occurred', error.message);
});

readStream.on('end', () => {
  writeStream.end();
});

//when no more backpressure, continue
writeStream.on('drain', () => {
  console.log('drained');
  readStream.resume();
})

writeStream.on('close', () => {
  process.stdout.write('file copied\n');
})