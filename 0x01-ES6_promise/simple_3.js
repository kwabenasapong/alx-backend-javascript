// eslint-disable-next-line no-unused-vars
const getRandom = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 100);
  console.log(`${random} is the random number generated from the 1st promise`);
  if (random > 50) {
    resolve(random);
  } else {
    reject(new Error('The number is too small'));
  }
});

const promise = getRandom.then((result) => {
  console.log(`${result} is the result from the 2nd promise`);
  return new Promise((resolve, reject) => {
    if (result > 75) {
      resolve(result);
    } else {
      reject(new Error('The number is too small'));
    }
  });
});

promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
