const { Duplex, PassThrough } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const file = './assets/fa-video.mov';

const readStream = createReadStream(file);
const writeStream = createWriteStream('./assets/fa-video-copy.mov', {
  //highWaterMark: 1628920128
});

//slows the stream down
class Throttle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }

  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }

  _read() { }

  _final() {
    this.push(null);
  }
}

const report = new PassThrough();
const throttle = new Throttle(100);

var total = 0;
report.on('data', (chunk) => {
  total += chunk.length;
  console.log('bytes: ', total);
})

readStream
  .pipe(throttle)
  .pipe(report)
  .pipe(writeStream);
