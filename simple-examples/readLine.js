const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const num1 = Math.floor((Math.random() * 10) + 1);
const num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 + num2;

rl.question(`What is the sum of ${num2} + ${num2} ? `, (userInput) => {
  console.log(userInput.trim());
  if (userInput.trim() === answer) {
    rl.close();
  } else {
    rl.setPrompt('Incorrect, please try again: ');
    rl.prompt();
    rl.on('line', (userInput) => {
      if (userInput.trim() === answer) {
        rl.close();
      } else {
        rl.setPrompt('Incorrect again!\n');
        rl.prompt();
      }
    })
  }
});

rl.on('close', () => {
  console.log('GOOD JOB!')
})