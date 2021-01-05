const fs = require('fs');

/** WORKING WITH FILES */
//create a file
fs.writeFile('example.txt', 'example how to white a file', (err) => {
  if (err) console.log(err);
  else {
    console.log('file created');
    fs.readFile('example.txt', 'utf8', (err, file) => {
      if (err) console.log(err);
      else console.log(file);
    })
  }
})

//append the data
fs.appendFile('example.txt', ' What a lovely day!', (err, file) => {
  if (err) console.log(err);
  else console.log(file);
})

//rename
fs.rename('example.txt', 'newName.txt', (err) => {
  if (err) console.log(err);
  else {
    console.log('file renamed');
  }
})

//delete
fs.unlink('newName.txt', (err) => {
  if (err) console.log(err);
  else console.log('File is deleted');
})

/** WORKING WITH FOLDERS */
fs.mkdir('test-directory', (err) => {
  if (err) console.log(err);
  else {
    //add a file inside a folder
    fs.writeFile('./test-directory/test.txt', 'test data', (err) => {
      if (err) console.log(err);
      else console.log('created a file');
    })
  };
})

//to remove a dir, we need first delete files inside
fs.unlink('./test-directory/test.txt', (err) => {
  if (err) console.log(err);
  else {
    //now we can safely remove a dir
    fs.rmdir('test-directory', (err) => {
      if (err) console.log(err);
      else console.log('deleted a folder');
    })
  }
})

//delete many files in a folder
fs.readdir('test-directory', (err, files) => {
  if (err) console.log(err);
  else {
    console.log(files);
    for (let file of files) {
      fs.unlink(`./test-directory/${file}`, (err) => {
        if (err) console.log(err);
        else console.log(`deleted ${file}`);
      })
    }
  }
})
