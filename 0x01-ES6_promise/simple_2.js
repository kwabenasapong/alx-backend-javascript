const prompt = require('prompt-sync')();

const promise = new Promise((resolve, reject) => {
  // wait for input from the user
  // eslint-disable-next-line no-alert
  const userInput = prompt('Enter a number: ', '');
  // if the user input is a number, resolve the promise with the number
  if (Number(userInput)) {
    resolve(userInput);
  }
  // otherwise, reject the promise with an error message
  reject(new Error('Not a number'));
});

promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
