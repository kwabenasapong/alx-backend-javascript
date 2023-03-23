import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
handleResponseFromAPI(promise);
console.log(handleResponseFromAPI(promise));

const promise1 = Promise.reject();
handleResponseFromAPI(promise1);
console.log(handleResponseFromAPI(promise1));
