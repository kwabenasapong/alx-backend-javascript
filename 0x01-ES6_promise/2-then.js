const trueBool = { status: 200, body: 'Success' };
// const falseBool = 'The fake API is not working currently';

export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    console.log('Got a response from the API');
    // eslint-disable-next-line no-constant-condition
    if (promise) {
      return resolve(trueBool);
    }
    return reject(new Error());
  });
}
