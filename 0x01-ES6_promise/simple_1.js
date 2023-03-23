/* eslint-disable no-unused-vars */
const myPromise = new Promise((resolve, _reject) => {
  // this is the executor function, which takes two parameters: resolve and reject
  const value = 42;
  resolve(value); // resolves the promise with the value 42
});

myPromise.then((result) => {
  console.log(result); // 42
});
