const fs = require('fs');

// const data = 'What a lovely day in Berlin. Gray cold January weather, neighbours going rogue early in the morning. Life is beautiful, and there is so much to explore.'

// fs.writeFile('streams.txt', data, (err) => {
//   if (err) console.log(err);
//   else console.log('file created');
// })

const readStream = fs.createReadStream('./streams.txt', 'utf8');
readStream.on('data', (chunk) => {
  //get a chunk of data
  console.log(chunk);
})